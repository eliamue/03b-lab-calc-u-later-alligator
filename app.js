const addOne = document.getElementById('add1');
const addTwo = document.getElementById('add2');
const addButton = document.getElementById('add-btn');
const addDisplay = document.getElementById('add-result');
addButton.addEventListener('click', () => {
    addDisplay.textContent = Number(addOne.value) + Number(addTwo.value);
});
const subOne = document.getElementById('sub1');
const subTwo = document.getElementById('sub2');
const subButton = document.getElementById('sub-btn');
const subDisplay = document.getElementById('sub-result');
subButton.addEventListener('click', () => {
    subDisplay.textContent = Number(subOne.value) - Number(subTwo.value);
});
const multOne = document.getElementById('mult1');
const multTwo = document.getElementById('mult2');
const multButton = document.getElementById('mult-btn');
const multDisplay = document.getElementById('mult-result');
multButton.addEventListener('click', () => {
    multDisplay.textContent = Number(multOne.value) * Number(multTwo.value);
});
const divOne = document.getElementById('div1');
const divTwo = document.getElementById('div2');
const divButton = document.getElementById('div-btn');
const divDisplay = document.getElementById('div-result');
divButton.addEventListener('click', () => {
    divDisplay.textContent = Number(divOne.value) / Number(divTwo.value);
});