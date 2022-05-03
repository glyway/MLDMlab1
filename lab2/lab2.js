let relationInput;

let relationAddBtn;
let relationClearBtn;
let relationAnalizeBtn;

let relationMatrixTxt;

let relationReflective;
let relationSymmetric;
let relationTransitive;
let relationSkewSymmetric;

let flag = true;

let relationMatrix = Array(100).fill().map(()=> Array(100));

let multipliedMatrix;

function clearElements() {
    relationMatrix = [];
    relationInput.value = "";
    relationMatrixTxt.innerHTML = "";
    relationMatrix = Array(100).fill().map(()=> Array(100));
    relationReflective.innerHTML = "";
    relationSymmetric.innerHTML = "";
    relationSkewSymmetric.innerHTML = "";
    relationTransitive.innerHTML = "";
}


function analizeElements() {
    relationMatrixTxt.innerHTML = "";

    let isReflective = true;
    let isSymmetric = true;
    let isSkewSymmetric = true;
    let isTransitive = true;

    relationReflective.innerHTML = isReflective ? "Отношение рефлексивно" : "Отношение не рефлексивно";
    relationSymmetric.innerHTML = isSymmetric ? "Отношение симметрично" : "Отношение не симметрично";
    relationSkewSymmetric.innerHTML = isSkewSymmetric ? "Отношение кососимметрично" : "Отношение не кососимметрично";
    relationTransitive.innerHTML = isTransitive ? "Отношение транзитивно" : "Отношение не транзитивно";
}


window.onload = () => {
    relationInput = document.getElementById("relationInput");
    relationAddBtn = document.getElementById("relationAddBtn");
    relationClearBtn = document.getElementById("relationClearBtn");
    relationAnalizeBtn = document.getElementById("relationAnalizeBtn");
    relationMatrixTxt = document.getElementById("relationMatrixTxt");
    relationReflective = document.getElementById("relationReflective");
    relationSymmetric = document.getElementById("relationSymmetric");
    relationTransitive = document.getElementById("relationTransitive");
    relationSkewSymmetric = document.getElementById("relationSkewSymmetric");

    //relationAddBtn.onclick = addElement;
    relationClearBtn.onclick = clearElements;
    relationAnalizeBtn.onclick = analizeElements;
}
