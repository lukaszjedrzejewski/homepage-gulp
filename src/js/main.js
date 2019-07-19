"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

// Stare JS z homepage

// alert('siema');
console.log('Lolek');
const name = 'Łukasz';
const age = 17;
console.log(name);
console.log(age);

console.log(`${name}
${age}`);

// Literały

console.log(`Nazywam się ${name} i mam ${age} lat`);
console.log('witaj przybyszu 🚀');

// Domowe przedszkole
// Wybieranie selektora
const header = document.querySelector('.header__heading');
console.log(header);

// Wybieranie wszystkich p tzw. node list
const paragraps = document.querySelectorAll('p');
console.log(paragraps);
// Wybieranie 0 z kolei
console.log(paragraps[0]);

// InnerHTML
const diary = document.querySelector('.day__content--js');
console.log(diary.innerHTML);
diary.innerHTML = 'Pozdro JS';

// Praca domowa z JS #2
const add_text = document.querySelector('.add--js');

add_text.innerHTML = 'Tekst dodany za pomocą skryptu JS';

// Tydzień V Logika JS

//ELSE
if (age > 20) {
  console.log('masz więcej niz 20lat');
} else {
  console.log('masz mniej niz 20 lat');
}

//ELSE IF
if (age < 20) {
  console.log('masz mniej niz 20lat');
} else if (age >= 20 && age <= 30) {
  console.log('masz więcej niz 20 ale mniej niz 30 lat');
} else {
  console.log('jesteś 30+');
}

//SWITCH
switch (age) {
  case 20:
    console.log('masz równo 20 lat');
    break;
  case 30:
    console.log('masz równo 30 lat');
    break;
  default:
    console.log(`masz ${age} lat`);
    break;
}

//Zapis skrócony
// (zmienna1>zmienna2) ? console.log('true'): console.log('false')

const amIOld = age > 70 ? 'yes' : 'no';
console.log(amIOld);

// II sposób
let oldIndicator;

if (age > 70) {
  oldIndicator = 'yes';
} else {
  oldIndicator = 'no';
}

// Java Script: funkcje

function calculate(x) {
  x = x + 3;
  console.log(`tradycyjnie: ${x}`);
  return x * 7;
}

//Dwa sposoby wywyołania funkcji

console.log(calculate(2));

const myCalculation = calculate(4);
console.log(myCalculation);

//Funkcja strzłkowa

const calculateFat = x => {
  x = x + 3;
  console.log(`fat: ${x}`);
  return x * 7;
};

console.log(calculateFat(2));

//Funkcja strzłkowa inny zapis

const calculateFat2 = x => (x + 3) * 7;
console.log(calculateFat2(2));

function calculate(x) {
  x = x + 3;
  console.log(`tradycyjnie: ${x}`);
  return x * 7;
}


//JS Eventy

//Pobieranie buttona
const button = document.querySelector('.header__button--js');
console.log(button)

function handleClick() {
  console.log('halo');
}

//Dodajemy eventListener i podpinamy funkcję handleClick która to kliknięcie obsłuzy
// 1 sposób
// button.addEventListener('click', handleClick);

// 2 sposób
button.addEventListener('click', (e) => {

  // console.log(e.type);
  // console.log('hello arrow');
});

// Zmiana treści nagłowka

button.addEventListener('click', (e) => {
  const header = document.querySelector('.header__title--js');
  header.innerHTML = 'klik, klik'
  header.classList.toggle('header__title--red');
  // console.log(e.type);
  // console.log('hello arrow');
});

//hamburger

const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e => {
  const navigationList = document.querySelector(".navigation__list--js");
  navigationList.classList.toggle('navigation__list--visible');


}))

//dodanie X do hamburger
button.addEventListener('click', (e) => {
  const button1 = document.querySelector('.navigation__switcher--js');
  button1.innerHTML = 'klik, klik'
});