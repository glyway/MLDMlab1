let abc, def;
let flag = true;
while (flag){
    flag = false;
    abc = prompt("Введите элементы первого множества, маска (Цифра, Чётная, Нечётная, Цифра) (набирать без пробелов друг за другом)");
    def = prompt("Введите элементы первого множества, маска (Цифра, Чётная, Нечётная, Цифра) (набирать без пробелов друг за другом)");
    let errabc = [], errdef = [];
    for (let i = 0; i < abc.length; i++){
        if (i % 4 == 0){
            if (!(abc[i] >= '0' && abc[i] <= '9')){
                flag = true;
                errabc.push(i);
            }
        }
        else if (i % 4 == 1){
            if (!((abc[i] >= '0' && abc[i] <= '9') && +abc[i] % 2 == 0)){
                flag = true;
                errabc.push(i);
            }
        }
        else if (i % 4 == 2){
            if (!((abc[i] >= '0' && abc[i] <= '9') && +abc[i] % 2 == 1)){
                flag = true;
                errabc.push(i);
            }
        }
        else {
            if (!((abc[i] >= '0' && abc[i] <= '9'))){
                flag = true;
                errabc.push(i);
            }
        }
    }
    for (let i = 0; i < def.length; i++){
        if (i % 4 == 0){
            if (!(def[i] >= '0' && def[i] <= '9')){
                flag = true;
                errdef.push(i);
            }
        }
        else if (i % 4 == 1){
            if (!((def[i] >= '0' && def[i] <= '9') && +def[i] % 2 == 0)){
                flag = true;
                errdef.push(i);
            }
        }
        else if (i % 4 == 2){
            if (!((def[i] >= '0' && def[i] <= '9') && +def[i] % 2 == 1)){
                flag = true;
                errdef.push(i);
            }
        }
        else {
            if (!((def[i] >= '0' && def[i] <= '9'))){
                flag = true;
                errdef.push(i);
            }
        }
    }
    if (flag){
        let ta = "", td = "";
        console.log(errabc);
        for (let e of errabc){
            ta += e.toString() + " ";

        }
        for (let e of errdef){
            td += e.toString() + " ";
        }
        alert("УПС... Вы допустили ошибочки\nВ первом множестве ошибки под индексами: " + ta + "\nВо втором ошибки под индексами: " + td);
    }
    let flag2 = false;
    for (let i = 0; i < abc.length; i++){
        for (let j = 0; j < abc.length; j++){
            if (i != j && abc[i] == abc[j]) {
                flag2 = true;
                break;
            }
        }
        if (flag2) break;
    }
    for (let i = 0; i < def.length && !flag; i++){
        for (let j = 0; j < def.length; j++){
            if (i != j && abc[i] == abc[j]) {
                flag2 = true;
                break;
            }
        }
        if (flag2) break;
    }
    if (flag2){
        alert("Повторения запрещены...")
    }
}
function ob(a, b){
    let res = a;
    for (let e of b){
        if (!a.includes(e)) res+=e;
    }
    return res;
}
function per(a, b){
    let res = "";
    for (let e of a){
        if (b.includes(e)) res+=e;
    }
    return res;
}
function dop(a, b){
    let res = "";
    for (let e of a){
        if (!b.includes(e)) res+=e;
    }
    return res;
}
function obe(a, b){
    let res = "";
    dop(a,b).split('').map((e)=>{
        res+=e;
    })
    dop(b,a).split('').map((e)=>{
        res+=e;
    })
    return res;
}
alert("Объединение: " + ob(abc,def) + "\nРазность: " + per(abc,def) + "\nДополнение A/B: " + dop(abc,def) + "\nДополнение B/A: " + dop(def,abc) + "\nСимметрическая разность: " + obe(abc,def));
