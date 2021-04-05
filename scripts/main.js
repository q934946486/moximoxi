// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// let myVariable;
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }
// function multiply(num1,num2){
// 	let result = num1 * num2;
// 	return result;
// }

// document.querySelector('html').onclick = function(){
// 	alert('别戳我，我怕疼。')
// }

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/Mozilla.jpg') {
//       myImage.setAttribute('src', 'images/Mozilla2.jpg');
//     } else {
//       myImage.setAttribute('src', 'images/Mozilla.jpg');
//     }
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

if(localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name')
	myHeading.textContent = 'Mozilla 酷毙了,' + storedName;
}
myButton.onclick = function() {
	setUserName();
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}