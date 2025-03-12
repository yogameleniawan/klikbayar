import { Button, Card, CardBody, Input, Select, SelectItem, Switch } from '@nextui-org/react';
import { PlusIcon, XCircleIcon } from 'lucide-react';
import React, { useState } from 'react'

const DynamicProductsForm = ({
    data,
    setData,
    processing,
    errors,
    digiflazz_products
}) => {
    const [productItems, setProductItems] = useState(data.products || []);

    const handleAddProduct = () => {
        const newProducts = [...productItems, { digi_product_id: "", margin: "", discount: "", is_active: true }];
        setProductItems(newProducts);
        setData('products', newProducts);
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = productItems.filter((_, i) => i !== index);
        setProductItems(updatedProducts);
        setData('products', updatedProducts);
    };

    const handleProductChange = (index, field, value) => {
        const updatedProducts = [...productItems];
        updatedProducts[index][field] = value;
        setProductItems(updatedProducts);
        setData('products', updatedProducts);
    };

    if (productItems.length === 0) {
        handleAddProduct();
    }

    return (
        <Card className="w-full">
            <CardBody className="flex flex-col gap-4">
                {productItems.map((product, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-row items-center">
                            <h4 className="text-small font-medium">Product {index + 1}</h4>
                            {index > 0 && (
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="light"
                                    className="ml-2"
                                    onPress={() => handleRemoveProduct(index)}
                                >
                                    <XCircleIcon size={16} />
                                </Button>
                            )}
                        </div>
                        <div className="flex flex-row gap-2">
                            <Select
                                items={digiflazz_products.filter((item) => item.category === data.product_category_id)}
                                label="Digiflazz Product"
                                labelPlacement="outside"
                                placeholder="Select a Digiflazz Product"
                                defaultSelectedKeys={[product.digi_product_id]}
                                onChange={(e) => handleProductChange(index, "digi_product_id", e.target.value)}
                            >
                                {(item) => (
                                    <SelectItem key={item.id} textValue={item.product_name} value={item.product_name}>
                                        <span className="text-small">{item.product_name}</span>
                                    </SelectItem>
                                )}
                            </Select>
                            <Input
                                isRequired
                                label="Margin"
                                labelPlacement="outside"
                                placeholder="Enter margin (%) percent"
                                type="number"
                                value={product.margin}
                                errorMessage={errors[`products.${index}.margin`] || "Please enter a valid margin"}
                                isInvalid={errors[`products.${index}.margin`]}
                                onChange={(e) => handleProductChange(index, "margin", e.target.value)}
                            />
                            <Input
                                isRequired
                                label="Discount"
                                labelPlacement="outside"
                                placeholder="Enter discount (%) percent"
                                type="number"
                                value={product.discount}
                                errorMessage={errors[`products.${index}.discount`] || "Please enter a valid discount"}
                                isInvalid={errors[`products.${index}.discount`]}
                                onChange={(e) => handleProductChange(index, "discount", e.target.value)}
                            />
                        </div>
                        <Switch name="is_active" defaultSelected={product.is_active} size="sm" onValueChange={(isSelected) => handleProductChange(index, "is_active", isSelected)}>
                            Active
                        </Switch>
                    </div>
                ))}

                <div className="flex flex-row gap-2 mt-2">
                    <Button
                        variant="flat"
                        startContent={<PlusIcon size={16} />}
                        onPress={handleAddProduct}
                        disabled={processing}
                    >
                        Add Another Product
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default DynamicProductsForm
