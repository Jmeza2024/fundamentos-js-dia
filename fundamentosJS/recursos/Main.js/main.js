/*document.getElementById("demo").innerHTML = "hello JavaScript";
document.getElementById("demo").style.fontSize =" 35px"; 

/*SALIDA DE DATOS */
//window.alert(5+2);
console.log(6+2);


/*declaraciones*/

let a,b,c;
a = 5;
b = 6;
c = a + b;
//window.alert(c);
document.getElementById("demo").innerHTML = c ;

/* Variables */
let p,q,r;
p = 5;
q = 7;
const m = 8;
r = p + q + m;
document.getElementById("demo1").innerHTML = r ;
/* Tipos de datos */
let num = 24; //Numero entero
let name = "luis Vejarano"; //cadena
let km = 14.5; //numero decimal
let isColombiano = true; //booleano
let obj = {firsname: "Ana", lastname: "perez"}; // objetivo
let y = 17 + "poo";
window.alert(y);

/*definicion de funcion  */
function myFunction(){
    document.getElementById("demo2").innerHTML= "new paragraph"
}