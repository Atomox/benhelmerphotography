<?php

  switch($_SERVER['HTTP_HOST']) {

    // Local development.
    case 'local.benhelmer.com':
      $KOKEN_DATABASE = array(
        'driver' => 'mysqli',
        'hostname' => 'localhost',
        'database' => 'db166727_koken',
        'username' => 'db166727',
        'password' => 'Koken16572i657zrqt',
        'prefix' => 'koken_',
        'socket' => ''
      );
      break;

    // PROD
    default:
      $KOKEN_DATABASE = array(
        'driver' => 'mysqli',
        'hostname' => 'internal-db.s166727.gridserver.com',
        'database' => 'db166727_koken',
        'username' => 'db166727',
        'password' => 'Koken16572i657zrqt',
        'prefix' => 'koken_',
        'socket' => ''
      );
  }