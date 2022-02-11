let abc, def;
let flag = true;
while (flag){
    flag = false;
    abc = prompt("Введите элементы первого множества");
    def = prompt("Введите элементы первого множества");
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
console.log(ob(abc,def), per(abc,def), dop(abc,def), dop(def,abc), obe(abc,def));
