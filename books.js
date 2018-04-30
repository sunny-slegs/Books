'use strict';

let myLibrary = [
  {title: 'I Contain Multitudes', author: 'Ed Yong', pages: 175, read: false},
];

function addBookToLibrary(form) {
  let title = form.title.value;
  let author = form.author.value;
  let pages = form.pages.value;
  Book(title, author, pages);
}


function Book(title, author, pages) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  };
}

//Inputs info from myLibrary array to DOM after page has loaded
window.onload = function() {
    
  let str = '<div>';
  for (let i = 0; i < myLibrary.length; i++) {
    let card = myLibrary[i];
    str += '<ul>';
    for (let info in card) {
      str += '<li>' + card[info] + '</li>';
    }
    str += '</ul>';
  }
  str += '<div>';
  
  document.getElementById('library-cards').innerHTML = str;
 
};
