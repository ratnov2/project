let table = document.querySelector('.table');
let calcDel = document.querySelector('.calcDel');
let calcInput = document.querySelector('.calcInput');
let summa = document.querySelector('.summa');
let k = 0;

calcDel.addEventListener('mouseover', () => {
  calcDel.style.backgroundColor = 'black';
  calcDel.style.color = '#ffffff';
})

calcDel.addEventListener('mouseout', () => {
  calcDel.style.backgroundColor = '';
  calcDel.style.color = '';
})

calcDel.addEventListener('click', () => {
  calcInput.innerHTML = "";
})


table.addEventListener('mouseover', (e) => {
  if (e.target.tagName.toLowerCase() == 'td') {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = '#ffffff';
  }
})
/////
table.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() == 'td' && !(e.target.innerHTML == '=')) {
    calcInput.innerHTML += e.target.innerHTML;
  }
})

summa.addEventListener('click', () => {
  let k = calcInput.innerHTML;
  calcInput.innerHTML = eval(k);
})


/////
table.addEventListener('mouseout', (e) => {
  if (e.target.tagName.toLowerCase() == 'td') {
    e.target.style.backgroundColor = '';
    e.target.style.color = '';
  }
})
