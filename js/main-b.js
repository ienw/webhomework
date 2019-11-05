'use strict';
const main = document.querySelector('main');

//without + everything in p will be replaced by hello
//finnish keyboard: shift + can add tags without writing +
main.innerHTML += `<article>
            <header>
                <h2>Article header</h2>
            </header>
            <figure>
                <img src="http://placekitten.com/320/162" alt="title">
                <figcaption>Some other cats</figcaption>
            </figure>
            <p>Here is some text. Here is some text. Here is some text. Here is some text.</p>
        </article>`;