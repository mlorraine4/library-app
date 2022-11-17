let myLibrary = [];
var form = document.getElementById('form');
var submit = document.getElementById('submit');
var libraryDiv = document.getElementById('library');
var readBtn = document.querySelector('#readInput');

function Book(title, author, pages, releaseDate, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.releaseDate = releaseDate;
  this.read = readStatus;
}

var book1 = new Book('Harry Potter', 'jk rowling', '400', 'today', true);
myLibrary.push(book1);

form.onsubmit = function() {
  var newTitle = form.elements['title'].value;
  var newAuthor = form.elements['author'].value;
  var newPages = form.elements['pages'].value;
  var newReleaseDate = form.elements['releaseDate'].value;
  var readStatus = form.elements['read'].checked;
  console.log(readStatus)

  var newBook = new Book(newTitle, newAuthor, newPages, newReleaseDate, readStatus);
  myLibrary.push(newBook);
  addBookToLibrary(newTitle, newAuthor, newPages, newReleaseDate, readStatus);
  displayRemoveButtons();
  return false;
}

function addBookToLibrary(title, author, pages, releaseDate, readStatus) {
  var newDiv = document.createElement('div');
  newDiv.className = 'book';

  var p = document.createElement('p');
  p.className = "title";
  var titleText = document.createTextNode(title);
  p.appendChild(titleText);
  newDiv.appendChild(p);

  p = document.createElement('p');
  p.className = "author";
  var authorText = document.createTextNode('by: '+author);
  p.appendChild(authorText);
  newDiv.appendChild(p);

  p = document.createElement('p');
  p.className = "pages";
  var lengthText = document.createTextNode('number of pages: '+pages);
  p.appendChild(lengthText);
  newDiv.appendChild(p);

  p = document.createElement('p');
  p.className = "releaseDate";
  var relaseDateText = document.createTextNode('published: '+releaseDate);
  p.appendChild(relaseDateText);
  newDiv.appendChild(p);

  p = document.createElement('p');
  p.className = "read";
  var readText = document.createTextNode('finished: ')
  p.appendChild(readText);
  newDiv.appendChild(p);

  var toggleInput = document.createElement('input');
  toggleInput.setAttribute("type", "checkbox");
  var spanInput = document.createElement('span');
  spanInput.className = ("slider");
  var labelInput = document.createElement("label");
  labelInput.className = "readToggleBook";
  labelInput.appendChild(toggleInput);
  labelInput.appendChild(spanInput);
  newDiv.appendChild(labelInput);

  toggleInput.checked = readStatus;

  var removeBtn = document.createElement('BUTTON');
  removeBtn.className = "remove";
  removeBtn.innerHTML = "remove";
  newDiv.appendChild(removeBtn);

  libraryDiv.appendChild(newDiv);
}

function openForm() {
  document.getElementById("container").style.display = "block";
  document.getElementById("cancelBtn").style.display = "block";
  document.getElementById("openBtn").style.display = "none";
  displayRemoveButtons();
}

function closeForm() {
  document.getElementById("container").style.display = "none";
  document.getElementById("cancelBtn").style.display = "none";
  document.getElementById("openBtn").style.display = "block";
  hideRemoveButtons();
}

function displayRemoveButtons() {
  var removeBtns = document.querySelectorAll(".remove");
  for (var i=0; i<removeBtns.length; i++) {
  removeBtns[i].style.display = "block"; }
}

function hideRemoveButtons() {
  var removeBtns = document.querySelectorAll(".remove");
  for (var i=0; i<removeBtns.length; i++) {
  removeBtns[i].style.display = "none"; }
}

document.addEventListener('click', function() {
  if (event.target.matches('#readInput')) {
    var currentBook = event.target.parentElement.parentElement;
    currentTitle = currentBook.childNodes[1].textContent;
    for (var i=0; i<myLibrary.length;i++) {
      if (myLibrary[i].title === currentTitle) {
        myLibrary[i].read = !myLibrary[i].read
      }
    }
  }
}, false);

document.addEventListener('click', function() {
  if (event.target.matches('.remove')) {
    event.target.parentElement.remove();
  }
}, false);
