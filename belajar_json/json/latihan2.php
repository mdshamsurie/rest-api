
<?php 

// $data = file_get_contents('https://api.github.com/search/repositories?q=repo');
// $github = json_decode($data, true);

//var_dump($github);

 //echo $github;
//  print_r($github);
 
 $opts = [
    'http' => [
            'method' => 'GET',
            'header' => [
                    'User-Agent: PHP'
            ]
    ]
];

function X($x){
    echo "<pre>";
    print_r($x);
    echo "</pre>";

    
}


$context = stream_context_create($opts);
$content = file_get_contents("https://api.github.com/search/repositories?q=javascript&page=2&per_page=100", false, $context);
$github = json_decode($content, true);

X($github);


?>
