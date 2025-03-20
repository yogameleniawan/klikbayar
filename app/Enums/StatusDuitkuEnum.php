<?php

namespace App\Enums;

enum StatusDuitkuEnum: string
{
    case SUCCESS = "00";
    case PENDING = "01";
    case CANCELED = "02";
}
