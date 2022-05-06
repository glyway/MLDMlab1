let relationInput;
let firstSetInput;
let secondSetInput;

let relationClearBtn;
let relationAnalizeBtn;

let relationMatrixTxt;

let relationMatrix = [];

function clearElements() {
    relationInput.value = "";
    firstSetInput.value = "";
    secondSetInput.value = "";
    relationMatrix = [];
    workZone.style.display = "none";
}

function analizeElements() {
    addElements();
    let isFunction = true;
    for (let i = 0; i < relationMatrix.length; i++){
        let t = 0;
        for (let j = 0; j < relationMatrix[i].length; j++){
            t += relationMatrix[i][j];
        }
        if (t != 1){
            isFunction = false;
            break;
        }
    }

    workZone.style.display = "block";
    isFunctionTxt.innerHTML = isFunction ? "является функцией." : "не является функцией";
}

function addElements(){
    let relations = relationInput.value.split(/;+\s*/).filter( e => e.trim().length > 0);
    let firstSet = new Set(firstSetInput.value.split(/(\s+)/).filter( e => e.trim().length > 0));
    let secondSet = new Set(secondSetInput.value.split(/(\s+)/).filter( e => e.trim().length > 0));
    let isOkay = true;

    let realtionMatrixT = new Array(firstSet.size).fill().map(() => new Array(secondSet.size));

    relations = relations.map(el=>{
        let t = el.split(/(\s+)/).filter( e => e.trim().length > 0);
        if (t.length != 2 || !(firstSet.has(t[0]) && secondSet.has(t[1]))) isOkay = false;
        return t;
    })
    
    if(!isOkay){
        console.log(relations)
        alert("Была допущена ошибка при вводе, попробуйте ещё раз.");
        return;
    }

    let i = 0, j = 0;
    firstSet.forEach(el => {
        secondSet.forEach(el2 => {
            relations.forEach(el3=>{
                if (el3[0] == el && el3[1] == el2){
                    realtionMatrixT[i][j] = 1;
                }
                else if (realtionMatrixT[i][j] != 1){
                    realtionMatrixT[i][j] = 0;
                }
            })
            j++;
        })
        i++;
        j = 0;
    });

    console.log(realtionMatrixT, firstSet, secondSet);
    relationMatrix = JSON.parse(JSON.stringify(realtionMatrixT));;
}

window.onload = () => {
    relationInput = document.getElementById("relationInput");
    firstSetInput = document.getElementById("firstSetInput");
    secondSetInput = document.getElementById("secondSetInput");
    relationClearBtn = document.getElementById("relationClearBtn");
    relationAnalizeBtn = document.getElementById("relationAnalizeBtn");
    workZone = document.getElementById("workZone");
    isFunctionTxt = document.getElementById("isFunctionTxt");

    workZone.style.display = "none";

    relationClearBtn.onclick = clearElements;
    relationAnalizeBtn.onclick = analizeElements;
}
