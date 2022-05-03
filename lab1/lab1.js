function checkm (a) {
    if (a.length != 4) return true;
    if (!(a[0]>='0' && a[0] <= '9' && a[1]>='0' && a[1] <= '9' && a[2]>='0' && a[2] <= '9' && a[3]>='0' && a[3] <= '9')) return true;
    if (a[1] % 2 != 0) return true;
    if (a[2] % 2 == 0) return true;
    return 3;
}
function checkd (a) {
    for (let i = 0; i < a.length; i++){
        for (let j = i + 1; j < a.length; j++){
            if (a[i] == a[j]) {
                a.splice(j,1);
                j--;
            }
            
        }
    }
    return a;
}

let abc, def;
let flag = true;
while (flag){
    flag = false;
    abc = prompt("Введите элементы первого множества, маска (Цифра, Чётная, Нечётная, Цифра)");
    def = prompt("Введите элементы первого множества, маска (Цифра, Чётная, Нечётная, Цифра)");
    //Проверка маски
    abc = abc.split(" ");
    abc.map((el)=>{
        flag = (checkm(el) == 3 ? flag : true)
    })
    def = def.split(" ");
    def.map((el)=>{
        flag = (checkm(el) == 3 ? flag : true)
    })
    //Проверка на дупликаты и их удаление.
    abc = checkd(abc);
    def = checkd(def);
    
    if (flag) alert("Была допущена ошибка при вводе, попробуйте ещё раз.")
}
function ob(a, b){
    let res = [...a];
    b.map((e) => {
        if (!a.includes(e)) res.push(e);
    })
    console.log(a);
    return res;
}
function per(a, b){
    let res = [];
    a.map((e) => {
        if (b.includes(e)) res.push(e);
    })
    console.log(a);
    return res;
}
function dop(a, b){
    let res = [];
    a.map((e) => {
        if (!b.includes(e)) res.push(e);
    })
    console.log(a);
    return res;
}
function obe(a, b){
    let res = [];
    dop(a,b).map((e)=>{
        res.push(e);
    })
    dop(b,a).map((e)=>{
        res.push(e);
    })
    console.log(a);
    return res;
}
alert("A: " + abc + "\nB: " + def + "\nОбъединение: " + ob(abc,def) + "\nПересечение: " + per(abc,def) + "\nДополнение A/B: " + dop(abc,def) + "\nДополнение B/A: " + dop(def,abc) + "\nСимметрическая разность: " + obe(abc,def));
