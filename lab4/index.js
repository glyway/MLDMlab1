function analize() {
    const request = new XMLHttpRequest();

    const url = "script.php";

    workZone.style.display="block";

    const params = "weights=" + weightsInput.value + "&startIndex=" + startInput.value + "&endIndex=" + endInput.value + "&analize=" + "1";

    /* Указываем что соединение	у нас будет POST, говорим что путь к файлу в переменной url, и что запрос у нас
    асинхронный, по умолчанию так и есть не стоит его указывать, еще есть 4-й параметр пароль авторизации, но этот
        параметр тоже необязателен.*/
    request.open("POST", url, true);

//В заголовке говорим что тип передаваемых данных закодирован.
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.addEventListener("readystatechange", () => {

        if (request.readyState === 4 && request.status === 200) {
            document.getElementById("phpZone").innerHTML=request.responseText;
        }
    });

//	Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос.
    request.send(params);
}

function clearElements() {
    weightsInput.value = "";
    startInput.value = "";
    endInput.value = "";
    relationMatrix = [];
    workZone.style.display = "none";
}

window.onload = () => {
    weightsInput = document.getElementById("weightsInput");
    startInput = document.getElementById("startInput");
    endInput = document.getElementById("endInput");
    relationClearBtn = document.getElementById("relationClearBtn");
    relationAnalizeBtn = document.getElementById("relationAnalizeBtn");
    workZone = document.getElementById("workZone");

    workZone.style.display = "none";

    relationClearBtn.onclick = clearElements;
    relationAnalizeBtn.onclick = analize;
}