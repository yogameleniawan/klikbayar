<?php

namespace App\Enums;

enum PaymentStatusEnum: string
{
    case PENDING = "pending";
    case FAILED = "failed";
    case SUCCESS = "success";
    case REJECT = "reject";
}
