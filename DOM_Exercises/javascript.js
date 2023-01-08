const content = document.querySelector('.content');

const addPara = document.createElement('p');
addPara.textContent = 'This is edited content';

const addHead = document.createElement('h3');
addHead.textContent = 'This is a header edited in';
addHead.style.cssText = 'color:blue;';

const addDiv = document.createElement('div');
addDiv.style.cssText = 'border: 5px solid black;background-color: pink;'

const divContent = document.createElement('h1');
divContent.textContent = "I'm in a div";

const addParaDiv = document.createElement('p');
addParaDiv.textContent = "Me TOO!";




content.appendChild(addHead);
content.appendChild(addPara);
content.appendChild(addDiv);
addDiv.appendChild(divContent);
addDiv.appendChild(addParaDiv);