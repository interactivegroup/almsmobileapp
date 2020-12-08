<?php
// This file is part of Alms - http://lms.aldermin.com/
//
// Alms is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Alms is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Alms.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Script for getting the PHP structure of a WS returns or params.
 *
 * The first parameter (required) is the path to the Alms installation to use.
 * The second parameter (required) is the name to the WS to convert.
 * The third parameter (optional) is a number: 1 to convert the params structure,
 * 0 to convert the returns structure. Defaults to 0.
 */

if (!isset($argv[1])) {
    echo "ERROR: Please pass the Alms path as the first parameter.\n";
    die();
}


if (!isset($argv[2])) {
    echo "ERROR: Please pass the WS name as the second parameter.\n";
    die();
}

$almspath = $argv[1];
$wsname = $argv[2];
$useparams = !!(isset($argv[3]) && $argv[3]);

define('CLI_SCRIPT', true);

require($almspath . '/config.php');
require($CFG->dirroot . '/webservice/lib.php');
require_once('ws_to_ts_functions.php');

$structure = get_ws_structure($wsname, $useparams);

if ($structure === false) {
    echo "ERROR: The WS wasn't found in this Alms installation.\n";
    die();
}

remove_default_closures($structure);
echo serialize($structure);
