<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class PaymentNotificationEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    public function __construct($message)
    {
        Log::info('PaymentNotificationEvent created with message: ' . $message);
        $this->message = $message;
    }

    public function broadcastOn()
    {
        Log::info('PaymentNotificationEvent broadcasting on channel: payment-notification');
        return new Channel('payment-notification');
    }

    public function broadcastAs()
    {
        return 'PaymentNotificationEvent';
    }
}
