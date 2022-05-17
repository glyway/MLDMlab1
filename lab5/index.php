<?php
include_once 'script.php';
?>

<html>
<head>
    <title>Лабораторная работа 5</title>
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
</head>
<body>
<div class="header">
    <h1 >Матрица достижимости</h1>
</div>
<div class="contentWrapper">
    <div class="content">
        <button class="success" id="relationAnalizeBtn">Анализ</button>
        <p class="bold">Матрица смежности</p>
        <textarea type="text" id="adjacencyMatrix" placeholder="0 1 1 &#10;0 0 1&#10;0 1 0"></textarea>
        <div class="controlCenter">
            <button class="warning" id="relationClearBtn">Отчистить</button>
        </div>
        <div id="workZone">
            <h2 style="text-align: center">Рабочая зона</h2>
            <p>Матрица достижимости</p>
            <div id="phpZone"></div>
        </div>
    </div>
</div>

</body>
</html>