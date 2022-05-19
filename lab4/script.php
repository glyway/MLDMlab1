<?php
    $weightMatrix = [];
    $distanceMatrix = [];
    $pathMatrix = [];
    $shortestPath = [];

    if (isset($_POST["analize"])) {
        $graph = $_POST["weights"];
        $startIndex = $_POST["startIndex"]-1;
        $endIndex = $_POST["endIndex"]-1;
        $rows = explode("\n", $graph);
        for ($i = 0; $i < count($rows); $i++){
            $els = preg_replace("/\s+/", " ", $rows[$i]);
            $els = explode(" ", $els);
            $row = [];
            for($j = 0; $j < count($els); $j++){
                if ($els[$j] == ""){
                    unset($els[$j]);
                    $j--;
                }
            }
            if (count($els) != count($rows)){
                echo "<p>Неверный ввод</p>";
                die();
            }
            for($j = 0; $j < count($els); $j++){
                $t = $els[$j];
                if ($t == "-"){
                    array_push($row, INF);
                }
                else {
                    array_push($row, (int)$t);
                }
            }
            array_push($weightMatrix, $row);
        }
        analize();
    }

    function initPathMatrix() {
        global $weightMatrix, $pathMatrix;

        for ($i = 0; $i < count($weightMatrix); $i++) {
            for ($j = 0; $j < count($weightMatrix[$i]); $j++) {
                $pathMatrix[$i][$j] = $i;
            }
            $pathMatrix[$i][$i] = -1;
        }
    }

    function findShortestPath(){
        global $distanceMatrix, $pathMatrix, $shortestPath, $startIndex, $endIndex;

        $nodeEnd = $endIndex;

        if ($distanceMatrix[$startIndex][$endIndex] == INF) {
            echo "<p>Путь не найден.</p>";
            die();
        }

        while ($nodeEnd != -1) {
            array_push($shortestPath, $nodeEnd+1);
            $nodeEnd = $pathMatrix[$startIndex][$nodeEnd];
        }

        $shortestPath = array_reverse($shortestPath);
    }

    function buildDistanceMatrix(){
        global $weightMatrix, $distanceMatrix, $pathMatrix;

        for ($k = 0; $k < count($weightMatrix); $k++) {
            for ($i = 0; $i < count($weightMatrix); $i++) {
                for ($j = 0; $j < count($weightMatrix); $j++) {
                    if ($distanceMatrix[$i][$k]+$distanceMatrix[$k][$j] < $distanceMatrix[$i][$j]) {
                        $distanceMatrix[$i][$j] = $distanceMatrix[$i][$k]+$distanceMatrix[$k][$j];
                        $pathMatrix[$i][$j] = $pathMatrix[$k][$j];
                    }
                }
            }
        }
    }

    function analize(){
        global $distanceMatrix, $shortestPath, $startIndex, $endIndex, $weightMatrix;

        initPathMatrix();
        $distanceMatrix = $weightMatrix;
        buildDistanceMatrix();
        findShortestPath();

        echo "<p>Путь до вершины: ";
        for ($i = 0; $i < count($shortestPath); $i++){
            echo $shortestPath[$i]." ";
        }
        echo "</p>";
        echo "Расстояние до вершины: ".$distanceMatrix[$startIndex][$endIndex];
    }

?>