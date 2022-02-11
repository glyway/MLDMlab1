let abc, def;
abc = prompt("Введите элементы первого множества");
def = prompt("Введите элементы первого множества");
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
