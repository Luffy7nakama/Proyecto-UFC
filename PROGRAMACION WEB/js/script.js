//ejemplo1
function edad (a,b){
    if (a>b)
        return a;
    else
        return b;
}
let edadMayor=edad(25,20);
console.log(edadMayor);
console.log(edad(25,20));
//ejemplo2
function altura(a,b){
    if(a>b)
        return a;
    else
        return b;
}
let alturaMayor=altura (1.75,1.60);
console.log(alturaMayor);
console.log(altura(1.75,1.60));
//ejemplo3
function peso(a,b){
    if(a>b)
        return a;
    else
        return b;
}
let pesoMayor=peso(63,73);
console.log(pesoMayor);
console.log(peso(63,73));
//ejemplo4
function metros(m,c){
    if(m>c)
        return m;
    else 
        return c;
}             
let metrosMayor=metros(2>1);
console.log(metrosMayor);
console.log(metros(2,1));
//ejemplo5
function numero(a,b){
    if (a,b)
        return a;
    else 
        return b;
}
let numeroMayor=numero(7>4);
console.log(numeroMayor);
console.log(numero(7,4));









//ejercicio1
const mayor= function(a,b){
     if(a>b)
        return a;
    else
        return b;
}
console.log(mayor(9,3))
//ejercicio2
const tamaño = function(a,b){
    if (a>b)
        return a;
    else 
        return b;
}
console.log(tamaño(1.79,1.60))
//ejercicio3
const edad1 = function(juan,eli){
    if(juan>eli)
        return juan;
    else 
        return eli;
}
console.log(edad1(22,18))
//ejercicio4
const tamaño1=function(g,p){
    if(g>p)
        return g;
    else 
        return p;
} 
console.log(tamaño(67,55))
//ejercicio5
const numero1=function(x,z){
    if(x>z)
        return x;
    else 
        return z;
} 
console.log(numero(79,53))





//ejercicio1
const mayor2 = (a,b) =>{
     if(a>b)
        return a;
    else
        return b;
}
console.log(mayor2(15,6))
//ejercicio2
const edad2=(Pedro,Ana)=>{
        if(Pedro>Ana)
        return Pedro;
    else
        return Ana;
}
console.log(edad2(15,12))
//ejercicio3
const peso1=(perez,juanito)=>{
        if(perez>juanito)
        return perez;
    else
        return juanito;
}
console.log(peso1(63,59))
//ejercicio4
const tamaño2=(saul,emilio)=>{
        if(saul>emilio)
        return saul;
    else
        return emilio;
}
console.log(tamaño2(69,67))
//ejercicio5
const numero2=(x,z)=>{
        if(x>z)
        return x;
    else
        return z;
}
console.log(numero2(6,3))




//ejercicio1
const mayor3 = (a,b) => (a>b?a:b)
console.log(mayor3(20,11)) 
 
//ejercicio2
const edad3 =(alvarez,blanco)=>(alvarez>blanco?alvarez:blanco)
console.log(edad3(10,7))

//ejercio3
const altura1 =(pedro,nicky)=>(pedro>nicky?pedro:nicky)
console.log(edad3(67,59))

//ejercicio4
const peso2 =(manuel,chiqui)=>(manuel>chiqui?manuel:chiqui)
console.log(edad3(73,66))

//ejercicio5
const numero3 =(x,y)=>(x>y?x:y)
console.log(numero3(15,2))