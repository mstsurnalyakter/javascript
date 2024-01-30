/**
 * creating html element
 * 1. create tag
 * 2. create text
 * 3. using appendText method added text with html tag
 * 4. find parent element
 * 5. add html tag with parent element
 */

// creating h1 element

let heading3 = document.createElement('h1');
let text = document.createTextNode('This heading 3');
let div = document.getElementsByTagName('div')[0];
heading3.appendChild(text);

div.appendChild(heading3);

// creating p element
let para = document.createElement('p');
let text2 = document.createTextNode('This paragraph');
para.appendChild(text2);
div.appendChild(para);

/**
 * create html tag --> let h3 = document.createElement('h3);
 * create text --> let text = document.createTextNode('This is h3 tag");
 * find parent element --> let div = document.getElementByClassName('.div');
 * added text with html tag --> h3.appendChild(text)
 * added create tag with parent element --> div.appendChild(h3);
 */

// add new element in div 2
let heading2 = document.createElement('h3');
let text3 = document.createTextNode('This is h2');
let div2 = document.getElementsByClassName('div2')[0];
heading2.appendChild(text3);
div2.appendChild(heading2);
