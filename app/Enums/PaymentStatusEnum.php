<?php

namespace App\Enums;

enum PaymentStatusEnum: string
{
    case CAPTURE = "capture";
    case CHALLENGE = "challenge";
    case SETTLEMENT = "settlement";
    case PENDING = "pending";
    case DENY = "deny";
    case EXPIRE = "expire";
    case CANCEL = "cancel";
    case REFUND = "refund";
    case PARTIAL_REFUND = "partial_refund";
    case FAILED = "failed";
    case SUCCESS = "success";
    case REJECT = "reject";
    case REVIEW = "review";
}
