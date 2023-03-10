'use strict';
// 1. Pedir nombre al usuario y saludarlo.
const $exer1Form = document.getElementById('exer1');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');


$exer1Form.addEventListener('submit', (e) => {
  e.preventDefault();
  if($exer1Form.name.value.length==0 || /^\s+$/.test($exer1Form.name.value) ){
    alert("Campo vacio! ", 'danger');
  }else{
    alert(`Hola, ${$exer1Form.name.value}!`, 'success');
  }
        
});


    const alert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>',
        ].join('');
      
        alertPlaceholder.append(wrapper);
      };



// 2.Pedir edad al usuario y responder si es o no es mayor de edad.

const $exer2Form=document.getElementById("exer2");
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2');
$exer2Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    verEdad();
    
});

function verEdad(){
    const edad=$exer2Form.edad.value;
    if(edad.length==0 || /^\s+$/.test(edad) ){
        alert1("Campo vacio");
    }
    else if(edad>=18){
        alert1('Usted es mayor de edad','success' );
    }
    else {
        alert1("Usted no es mayor de edad");
    }


}
const alert1 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-warning alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder2.append(wrapper);
  };



/* 3.Pedir nombre y edad al usuario,
si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera. 4 */

const $exer3Form=document.getElementById("exer3");
const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3');

$exer3Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    verDatos();
});

function verDatos(){
    const edad=$exer3Form.edad.value;
    const name=$exer3Form.name.value;
     
    if(name==="pepita" && edad>=18){
        alert3("ingrese a la sala de espera 1");
    }else if(name==="pepita" && edad<18){
        alert3("ingrese a la sala de espera 2");
    }else if(name!="pepita" && edad>=18){
        alert3("ingrese a la sala de espera 3");
    }else if(name.length==0 || /^\s+$/.test(name)
    || edad.length==0 || /^\s+$/.test(edad)){
      alert3("Se esperaban campos");
    }else{
        alert3("ingrese a la sala de espera 4");
    }
}

const alert3 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder3.append(wrapper);
  };

//4.Pedir dos n??meros y mostrar el resto de la divisi??n. 

const $exer4Form=document.getElementById("exer4");
const alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4');

$exer4Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    operar();
});
const alert4 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder4.append(wrapper);
  };


function operar(){
    const num1=$exer4Form.num1.value;
    const num2=$exer4Form.num2.value;
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
      || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
        alert4("El valor ingresado debe ser un n??mero o esta en blanco")
    }else{
        const resultado= parseInt(num1) % parseInt(num2);
        alert4(num1 + ' mod ' + num2 + ' = ' + resultado);
    }
    
}



//5.Pedir dos n??meros y mostrar si el primero es divisible por el segundo.
const $exer5Form=document.getElementById("exer5");
const alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5');

$exer5Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  modulo();
});

const alert5 = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder5.append(wrapper);
};
function modulo(){
  const num1=$exer5Form.num1.value;
    const num2=$exer5Form.num2.value;
    const resultado= parseInt(num1) % parseInt(num2);
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
      || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
        alert5("El valor ingresado debe ser un n??mero o esta en blanco")
    }else if(resultado===0){
        alert5("El n??mero : " +num1 + " es divisible por el n??mero " + num2);
    }else{
      alert5("No es divisible");
    }
}

//6.Pedir dos n??meros y el nombre de una operaci??n, mostrar resultado. 
const $exer6Form=document.getElementById("exer6");
const alertPlaceholder6 = document.getElementById('liveAlertPlaceholder6');
$exer6Form.addEventListener('click', (e) =>{
  e.preventDefault();
 
});
const alert6 = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');




  alertPlaceholder6.append(wrapper);
}
function suma(){
  const num1=$exer6Form.num1.value;
  const num2=$exer6Form.num2.value;
  if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
      || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
        alert6("El valor ingresado debe ser un n??mero o esta en blanco")
  }else {
    const resultado=parseFloat(num1)+parseFloat(num2);
    alert6("El resultado de la operaci??n es: " + resultado);
  }
}
function resta(){
  const num1=$exer6Form.num1.value;
  const num2=$exer6Form.num2.value;
  if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
      || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
        alert6("El valor ingresado debe ser un n??mero o esta en blanco")
  }else {
  const resultado=parseFloat(num1)-parseFloat(num2);
  alert6("El resultado de la operaci??n es: " + resultado);
  }
}
function multi(){
  const num1=$exer6Form.num1.value;
  const num2=$exer6Form.num2.value;
  if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
      || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
        alert6("El valor ingresado debe ser un n??mero o esta en blanco")
  }else {
  const resultado=parseFloat(num1)*parseFloat(num2);
  alert6("El resultado de la operaci??n es: " + resultado);
  }
}
function dividir(){
  const num1=$exer6Form.num1.value;
  const num2=$exer6Form.num2.value;
  if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
      || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
        alert6("El valor ingresado debe ser un n??mero o esta en blanco")
  }else {
  const resultado=parseFloat(num1)/parseFloat(num2);
  alert6("El resultado de la operaci??n es: " + resultado);
  }
}




//7.Pedir un n??mero, mostar la suma desde 1 hasta N 

const $exer7Form=document.getElementById("exer7");
const alertPlaceholder7 = document.getElementById('liveAlertPlaceholder7');
$exer7Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  sumaTotal();
});

const alert7 = (message, type) => {
const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder7.append(wrapper);
}
function sumaTotal(){
  const numero1=parseInt($exer7Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert7("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    let i=0;
    let resultado=0;

    for (let i = 0; i<=numero1 ; i++) {
        resultado+=i;
        }
        alert7("La suma total de 1 hasta " + numero1 + " es : "+ resultado);
  }
    
}



//8.Pedir un n??mero, mostar la suma de los n??meros pares desde 1 hasta n. 

const $exer8Form=document.getElementById("exer8");
const alertPlaceholder8 = document.getElementById('liveAlertPlaceholder8');
$exer8Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  pares();
});

const alert8 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder8.append(wrapper);
  }

function pares(){
  const numero1=parseInt($exer8Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert8("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    let i=0;
    let resultado=0;
    for (let i = 0; i<=numero1 ; i++) {
      if (i % 2 ===0) {
          resultado=resultado+i;          
      }
      }
      alert8("La suma total de los n??mero pares es : "+ resultado);
  }
}

//9.Pedir un n??mero, mostar la suma de los n??meros impares desde 1 hasta n. 

const $exer9Form=document.getElementById("exer9");
const alertPlaceholder9 = document.getElementById('liveAlertPlaceholder9');
$exer9Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  impares();
});

const alert9 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder9.append(wrapper);
  }


  
function impares(){
  const numero1=parseInt($exer9Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert9("El valor ingresado debe ser un n??mero o esta en blanco");
  }else{
      let i=0;
      let resultado=0;
      for (let i = 0; i<=numero1 ; i++) {
        if (i % 2 !== 0) {
          resultado=resultado+i;  
          
        }
              
      } 
      alert9("La suma total de los n??mero impares es: "+ resultado );       
  }
}

//10.Pedir un n??mero, mostrar m??ltiplos de 3 desde 1 hasta n.

const $exer10Form=document.getElementById("exer10");
const alertPlaceholder10 = document.getElementById('liveAlertPlaceholder10');
$exer10Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  multiploTres();
});

const alert10 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder10.append(wrapper);
  }

function multiploTres(){
  const numero1=parseInt($exer10Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert10("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    let i=1;
    while (i<=numero1) {
        if (i % 3 === 0) {
            alert10("Este es m??ltiplo  de 3: "+ i);
        }
        i++;
    }
  }
}

//11.Pedir un n??mero, mostrar desde N hasta 0
const $exer11Form=document.getElementById("exer11");
const alertPlaceholder11 = document.getElementById('liveAlertPlaceholder11');
$exer11Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  total();
});
const alert11 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder11.append(wrapper);
  }

function total(){
  const numero1=parseInt($exer11Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert11("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    for(let i= numero1; i>=0; i--){
      alert11(i);
  }

  }
}
//12.Pedir un n??mero y mostrar los n??meros pares o impares. 

const $exer12Form=document.getElementById("exer12");
const alertPlaceholder12 = document.getElementById('liveAlertPlaceholder12');
$exer12Form.addEventListener('click', (e) =>{
  e.preventDefault();
});
const alert12 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder12.append(wrapper);
  }
function numPares(){
  const numero1=parseInt($exer12Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert12("El valor ingresado debe ser un n??mero o esta en blanco")
  }
  else{
    let par = '';
    for (let i = 1; i <= numero1; i++) {
      if (i % 2 === 0) {
        par += i + ', ';
      }else{
       alert12("Estos son los n??mero pares desde " + 1 + " hasta " + numero1 + ":" + par);
      }
    }
    
  }
  }

  function numImpar(){
    const numero1=parseInt($exer12Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert12("El valor ingresado debe ser un n??mero o esta en blanco")
    }
    else{
      let impar=" ";
      for (let i = 1; i <= numero1; i++) {
        if (i % 2 !== 0) {
          impar += i + ', ';
        }else{
          alert12("Estos son los n??mero impares desde " + 1 + " hasta " + numero1 + ":" + impar );
        }
      }
      
    }
    }

//13. Pedir un n??mero y mostrar su doble o triple
const $exer13Form=document.getElementById("exer13");
const alertPlaceholder13 = document.getElementById('liveAlertPlaceholder13');
$exer13Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  
});
const alert13 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder13.append(wrapper);
  }
function doble(){
  const numero1=parseInt($exer13Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert13("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    const resultado= numero1*2;
    alert13("El doble el n??mero ingresado es : " +resultado);
  }
}

function triple(){
  const numero1=parseInt($exer13Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert13("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    const resultado= numero1*3;
    alert13("El triple el n??mero ingresado es : " +resultado);
  }
}

//14.Pedir un n??mero mostrar la mitad o la tercera parte. 

const $exer14Form=document.getElementById("exer14");
const alertPlaceholder14 = document.getElementById('liveAlertPlaceholder14');
$exer14Form.addEventListener('click', (e) =>{
  e.preventDefault();
});

const alert14 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder14.append(wrapper);
  }

function mitad(){
  const numero1=parseInt($exer14Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert14("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    const resultado=numero1/2;
    alert14("La mitad del n??mero ingresado es : "+ resultado);
}
}
function tercera(){
  const numero1=parseInt($exer14Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert14("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    const resultado=numero1/3;
    alert14("La tercera parte del n??mero ingresado es : "+ resultado);
}
}

//15.Pedir un n??mero y mostrar su doble m??s cuatro. 

const $exer15Form=document.getElementById("exer15");
const alertPlaceholder15 = document.getElementById('liveAlertPlaceholder15');
$exer15Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  dobleCuatro();
});

const alert15 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder15.append(wrapper);
  }

function dobleCuatro(){
  const numero1=parseInt($exer15Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){

    alert15("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    const resultado= (numero1*2)+4;
    alert15("El doble de " +numero1 + " m??s cuatro es : "+resultado);
}
}

//16. Pedir un n??mero verificar si es positivo o negativo, o es cero. 
const $exer16Form=document.getElementById("exer16");
const alertPlaceholder16 = document.getElementById('liveAlertPlaceholder16');
$exer16Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  identificador();
});

const alert16 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder16.append(wrapper);
  }


function identificador(){
  const numero1=parseInt($exer16Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert16("El valor ingresado debe ser un n??mero o esta en blanco")
    }else if(numero1>=1){
      alert16("El n??mero ingresado es positivo")
    }else if(numero1===0){
      alert16("El n??mero ingresado es igual a cero");
    }else{
      alert16("El n??mero ingresado es negativo");
    }
  }

//17.Pedir un n??mero y verificar si par impar o cero

const $exer17Form=document.getElementById("exer17");
const alertPlaceholder17 = document.getElementById('liveAlertPlaceholder17');

$exer17Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  paresImpares();
});

const alert17 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder17.append(wrapper);
  }

  function paresImpares(){
    const numero1=parseInt($exer17Form.num1.value);
      if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
        alert17("El valor ingresado debe ser un n??mero o esta en blanco")
      }else if(numero1===0 ){
        alert17("El n??mero ingresado es igual a cero")
      }else if(numero1 % 2 === 0){
        alert17("El n??mero ingresado es par");
      }else{
        alert17("El n??mero ingresado es impar");
      }
    }

//18. Pedir un n??mero y mostrar su cuadrado

const $exer18Form=document.getElementById("exer18");
const alertPlaceholder18 = document.getElementById('liveAlertPlaceholder18');

$exer18Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  cuadrado();
});


const alert18 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-warning alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder18.append(wrapper);
  }
function cuadrado(){
  const numero1=parseInt($exer18Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert18("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    const resultado=numero1*numero1;
    alert18("El cuadro del n??mero ingresado es : "+resultado);
  }
}

//19.Pedir un n??mero y verificar si es primo o no

const $exer19Form=document.getElementById("exer19");
const alertPlaceholder19 = document.getElementById('liveAlertPlaceholder19');

$exer19Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  primo();
});

const alert19 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-warning alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder19.append(wrapper);
  }

function primo(){
  const numero1=parseInt($exer19Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert19("El valor ingresado debe ser un n??mero o esta en blanco")
  }else if(numero1<2){
    alert19("Ingrese un n??mero mayor a 1");
    return;
  }else{
     let contador=0;
     for(let i=1; i<=numero1; i++){
      if(numero1 % i ===0){
        contador++;
      }
     }

     if(contador===2){
      alert19("El n??mero ingresado es primo");
     }else{
      alert19("El n??mero ingresado NO es primo");
     }
  }
}

//20.Pedir un n??mero y mostrae los n??meros de 0 hasta N

/* const $exer20Form=document.getElementById("exer20");
const alertPlaceholder20 = document.getElementById('liveAlertPlaceholder20');
$exer20Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  retroceso();
});
const alert20 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-warning alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder20.append(wrapper);
  }
  function retroceso(){
    const numero1=parseInt($exer20Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert20("El valor ingresado debe ser un n??mero o esta en blanco")
  }else{
    for(let i =numero1; i < 0; i++){
      alert20(i);
    }  
  }
  } */
