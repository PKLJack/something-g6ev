<?php

$origin = 'http://localhost:3201'; // TODO: Read from env
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Headers: Content-Type");

phpinfo();
