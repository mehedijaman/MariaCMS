<?php

namespace App\Constants;

class Status
{
    public const PUBLISHED = 1;

    public const UNPUBLISHED = 0;

    public const DRAFT = null;

    public const LIST = [
        self::PUBLISHED,
        self::UNPUBLISHED,
        self::DRAFT,
    ];
}
