var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('#body')
var button = document.getElementsByTagName('button');

// var button= document.createElement("button");
// button.append(document.createTextNode('Click me'));

console.log(button);
// console.log(color1);
// console.log(color2);;

function backgroundGenerator(){
	body.style.background= "linear-gradient(to right, "+ color1.value +', ' + color2.value +")";
	css.textContent = body.style.background + ";";
};

// function generateNumber(min, max) {

//   	body.style.background= "linear-gradient(to right, "+ "#" + (Math.floor(Math.random() * (100000 - 1) ) + 1) +', ' + "#" + (Math.floor(Math.random() * (100000 - 1) ) + 1) +")";
// }

// css.after(button);

color1.addEventListener('input', backgroundGenerator);

color2.addEventListener('input', backgroundGenerator);

// button.addEventListener("click", generateNumber);