<?php
    $adjacencyMatrix = [];

    if (isset($_POST["analize"])) {
        $graph = $_POST["graph"];
        $rows = explode("\n", $graph);
        for ($i = 0; $i < count($rows); $i++){
            $els = preg_replace("/\s+/", " ", $rows[$i]);
            $els = explode(" ", $els);
            $row = [];
            if (count($els) != count($rows)){
                echo "<p>Неверный ввод</p>";
                die();
            }
            for($j = 0; $j < count($els); $j++){
                $t = $els[$j];
                if ($t == "0" || $t == "1"){
                    array_push($row, (int)$t);
                }
                else {
                    echo "<p>Неверный ввод</p>";
                    die();
                }
            }
            array_push($adjacencyMatrix, $row);
        }
        analize();
    }

    function analize()
    {
        global $adjacencyMatrix;

        $reachabilityMatrix = $adjacencyMatrix;

        for ($k = 0; $k < count($reachabilityMatrix); $k++){
            for ($i = 0; $i < count($reachabilityMatrix); $i++){
                for ($j = 0; $j < count($reachabilityMatrix); $j++){
                    if ($reachabilityMatrix[$i][$k] && $reachabilityMatrix[$k][$j] && $i != $j){
                        if ($reachabilityMatrix[$i][$k] + $reachabilityMatrix[$k][$j] < $reachabilityMatrix[$i][$j] || $reachabilityMatrix[$i][$j] == 0){
                            $reachabilityMatrix[$i][$j] = 1;
                        }
                    }
                }
            }
        }

        echo "<p>";

        for ($i = 0; $i < count($reachabilityMatrix); $i++){
            for ($j = 0; $j < count($reachabilityMatrix); $j++){
                echo $reachabilityMatrix[$i][$j]." ";
            }
            echo "<br>";
        }

        echo "</p>";
    }
?>