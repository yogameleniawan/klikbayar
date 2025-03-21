<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\PaymentMethod;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductPromo;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $banners = Banner::with('file')->get();

        $allProductsCount = Product::count();

        $product_promos = ProductPromo::with('product.image')->where('type', 'promo')->get()->toArray();
        $product_best = ProductPromo::with('product.image')->where('type', 'best')->get();

        $categories = ProductCategory::withCount('products')->orderBy('name', 'DESC')->get()->map(function ($category, $i) use ($allProductsCount) {
            return [
                'id' => $category->id,
                'name' => $category->name,
                'total' => $category->name === 'Semua' || str_contains($category->name, 'Semua') ? $allProductsCount : $category->products_count,
                'isActive' => $i === 0 ? true : false,
                'icon' => $category->icon,
            ];
        });

        return Inertia::render('Customer/Beranda', [
            'banners' => $banners,
            'categories' => $categories,
            'product_promos' => $product_promos,
            'product_best' => $product_best
        ]);
    }

    public function checkout($slug)
    {
        $product = Product::with([
            'category',
            'banner',
            'image'
        ])->with(['detail' => function ($query) {
            $query->with(['digiflazz']);
            $query->join('digi_products', 'digi_products.id', '=', 'product_details.digi_product_id')
                ->orderBy('digi_products.price', 'asc')
                ->select('product_details.*');
        }])->where('slug', $slug)->first();

        if (!$product) {
            return Inertia::render('NotFound');
        }

        $payment_methods = PaymentMethod::where('enabled', true)->get();

        return Inertia::render('Customer/Checkout/Index', [
            'product' => $product->toArray(),
            'payment_methods' => $payment_methods->toArray()
        ]);
    }

    public function checkTransaction()
    {
        return Inertia::render('Customer/Transaction/Index');
    }

    public function detailTransaction($id)
    {
        $transaction = Transaction::with(['transaction_detail.product_detail.product.image', 'transaction_log', 'payment_method'])->where('id', $id)->first()->toArray();

        return Inertia::render('Customer/Transaction/Detail/Index', [
            'transaction' => $transaction
        ]);
    }

    public function aboutUs()
    {
        return Inertia::render('Customer/TentangKami/Index');
    }

    /**
     * Handle Duitku payment notification callback
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function handleRedirect(Request $request)
    {
        Log::info('Duitku redirect received', $request->all());

        // Get all parameters from request
        $merchantOrderId = $request->input('merchantOrderId');
        $reference = $request->input('reference');

        Log::info('Payment Redirect Received', $request->all());

        $transaction = Transaction::where('invoice_number', $merchantOrderId)->first();

        if (!$transaction) {
            Log::warning('Transaction not found', ['order_id' => $merchantOrderId]);
            return response()->json(['status' => 'error', 'message' => 'Transaction not found'], 404);
        }

        Log::info('Payment Callback: Success', [
            'merchantOrderId' => $merchantOrderId,
            'reference' => $reference
        ]);

        return redirect()->route('customer.detail-transaction', ['id' => $transaction->id]);
    }
}
