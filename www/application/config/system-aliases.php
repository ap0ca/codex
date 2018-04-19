<?php defined('SYSPATH') or die('No direct script access.');

return array(
    /**
     * List of uri which could not be used as aliases
     * They are processed via defined routes
     */
    'system' => array(
        '',
        'admin',
        'article',
        'articles',
        'auth',
        'contest',
        'contests',
        'course',
        'courses',
        'user',
        'users',
        'test',
        'quiz',

        /**
         * Join page and task
         */
        'join',
        'task',

        /**
         * Landing pages
         */
        'bot',
        'editor',
        'media',
        'special',
        
    )
);