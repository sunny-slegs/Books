'use strict';
let myLibrary = [
  {title: 'Ella Enchanted', author: 'Gail Carson Levine', pages: 150, read: true},
  {title: 'The Catcher in the Rye', author: 'J. D. Salinger', pages: 100, read: true},
  {title: 'I Contain Multitudes', author: 'Ed Yong', pages: 175, read: false},
];




function addBookToLibrary(form) {
  let title = form.title.value;
  let author = form.author.value;
  let pages = form.pages.value;
  let read = form.read.value;
  function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = function(read) {
      read === true ? 'read' : 'not read yet';
    },
    this.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
  }
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
