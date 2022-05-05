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

let relationMatrix = [];

let multipliedMatrix;

function multiplyMatrix(arr){
    let cloneArr = JSON.parse(JSON.stringify(arr));
    for (let k = 0; k < arr.length; k++) {
        for (let i = 0; i < arr.length; i++) { 
            let t = 0;
            for (let j = 0; j < arr.length; j++) {
                t += arr[i][j] * arr[j][k];
            }
            cloneArr[i][k] = t % 2;
       }
    }
    console.log(cloneArr);
    return cloneArr;
}

function clearElements() {
    relationInput.value = "";
    relationMatrix = [];
    relationReflective.innerHTML = "";
    relationSymmetric.innerHTML = "";
    relationSkewSymmetric.innerHTML = "";
    relationTransitive.innerHTML = "";
    workZone.style.display = "none";
}


function analizeElements() {

    let isReflective = true;
    let isSymmetric = true;
    let isSkewSymmetric = true;
    let isTransitive = true;

    multipliedMatrix = multiplyMatrix(relationMatrix);

    for (let i = 0; i < relationMatrix.length; i++){
        for (let j = 0; j < relationMatrix.length; j++){
            if (i == j && relationMatrix[i][j] == 0) isReflective = false;
            if (relationMatrix[i][j] != relationMatrix[j][i]) isSymmetric = false;
            if (i != j){
                if (relationMatrix[i][j] == relationMatrix[j][i]) isSkewSymmetric = false;
            }
            if (relationMatrix[i][j] == 0 && multipliedMatrix[i][j] == 1) isTransitive = false;
        } 
    }
    console.log(relationMatrix);
    workZone.style.display = "block";
    relationReflective.innerHTML = isReflective ? "Отношение рефлексивно" : "Отношение не рефлексивно";
    relationSymmetric.innerHTML = isSymmetric ? "Отношение симметрично" : "Отношение не симметрично";
    relationSkewSymmetric.innerHTML = isSkewSymmetric ? "Отношение кососимметрично" : "Отношение не кососимметрично";
    relationTransitive.innerHTML = isTransitive ? "Отношение транзитивно" : "Отношение не транзитивно";
}

function addElements(){
    let lines = relationInput.value.split(/\r?\n/);
    let testLength = lines.length;
    let isOkay = true;
    lines = lines.map((el, i) => {
        let t = el.split(/(\s+)/).filter( e => e.trim().length > 0).map(e => {
            if (+e != 0 && +e != 1)
                isOkay = false;
            return +e;
        });
        if (testLength != t.length){
            isOkay = false;
        }
        return t;
    });
    if(!isOkay){
        alert("Была допущена ошибка при вводе, попробуйте ещё раз.");
        return;
    }
    relationMatrix = JSON.parse(JSON.stringify(lines));
    console.log(relationMatrix);
}

window.onload = () => {
    relationInput = document.getElementById("relationInput");
    relationAddBtn = document.getElementById("relationAddBtn");
    relationClearBtn = document.getElementById("relationClearBtn");
    relationAnalizeBtn = document.getElementById("relationAnalizeBtn");
    relationReflective = document.getElementById("relationReflective");
    relationSymmetric = document.getElementById("relationSymmetric");
    relationTransitive = document.getElementById("relationTransitive");
    relationSkewSymmetric = document.getElementById("relationSkewSymmetric");
    workZone = document.getElementById("workZone");

    workZone.style.display = "none";

    relationAddBtn.onclick = addElements;
    relationClearBtn.onclick = clearElements;
    relationAnalizeBtn.onclick = analizeElements;
}
