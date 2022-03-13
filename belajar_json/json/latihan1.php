<?php 

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

$dbh = new PDO('mysql:host=localhost;dbname=automation', 'root', '');
$db = $dbh->prepare('SELECT * FROM user_login');
$db->execute();
$automation = $db->fetchall(PDO::FETCH_ASSOC);

$data = json_encode($automation);
echo $data;


?>
