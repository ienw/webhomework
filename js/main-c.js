'use strict';
const main = document.querySelector('main');

const image = document.createElement('img');
image.src = 'http://placekitten.com/320/162';
//other way to add attributes:
image.setAttribute('cat', 'other cat');

const figure1 = document.createElement('figcaption');
//add text using innerHTML
figure1.innerHTML = 'Some caption';

const figure2 = document.createElement('figure');
const h2 = document.createElement('h2');
h2.innerHTML = 'hi hi hi hi';

const header = document.createElement('header');
const article = document.createElement('article');
const p = document.createElement('p');
p.innerHTML = 'bla bla bla bla';

figure2.appendChild(image);
figure2.appendChild(figure1);
article.appendChild(header);
article.appendChild(figure2);
article.appendChild(p);
header.appendChild(h2);
main.appendChild(article);




