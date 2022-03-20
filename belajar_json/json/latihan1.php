<?php 
//show data hardcode
// $pelajar = [
//     ["nama" => "mohd shamsurie",
//      "no matrik" => "fid3245",
//      "email" => "shamsurie@gmail.com"
//     ], 
//     ["nama" => "mohd firdaus",
//     "no matrik" => "fid3295",
//     "email" => "firdaus@gmail.com"
//    ],
// ];

// $data = json_encode($pelajar);
// echo $data;
// *******************************************************************

// show data dari database local
// $dbh = new PDO('mysql:host=localhost;dbname=northwindmysql', 'root', '');
// $db = $dbh->prepare('SELECT * FROM customers');
// $db->execute();
// $northwindmysql = $db->fetchall(PDO::FETCH_ASSOC);

// $data = json_encode($northwindmysql);
// echo $data;

// *******************************************************************
//show data dari json file
$data = file_get_contents('test.json');
$showData = json_decode($data, true);

var_dump($showData);
echo'******** -->';
echo $showData[0]["references"]["reference1"]; // dapatkan refence 1 dalam references
// *******************************************************************
 ?>
