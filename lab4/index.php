<?php
include_once 'script.php';
?>

<html>
<head>
    <title>Лабораторная работа 4</title>
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
</head>
<body>
<div class="header">
    <h1 >Кратчайший путь</h1>
</div>
<div class="contentWrapper">
    <div class="content">
        <button class="success" id="relationAnalizeBtn">Анализ</button>
        <p class="bold">Матрица весов</p>
        <textarea type="text" id="weightsInput" placeholder="0 2 5 &#10;* 0 1&#10;* * 0"></textarea>
        <p class="bold">Начальный индекс</p>
        <input type="text" id="startInput" placeholder="1 (Начиная с 1)">
        <p class="bold">Конечный</p>
        <input id="endInput" placeholder="3">
        <div class="controlCenter">
            <button class="warning" id="relationClearBtn">Отчистить</button>
        </div>
        <div id="workZone">
            <h2 style="text-align: center">Рабочая зона</h2>
            <div id="phpZone"></div>
        </div>
    </div>
</div>

</body>
</html>