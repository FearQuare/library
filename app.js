const addBookCard = document.querySelector('#add-book');
const closePopup = document.querySelector('#closePopup');
const popup = document.querySelector('#popup');
const addBookButton = document.querySelector('#add-book-button');
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search');
const searchResults = document.querySelector('#search-results');

addBookCard.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {    
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

let Library = [];

function addFirstBook(title, author, pages, status) {
  const book = document.createElement('div');
  book.classList.add('card');
  book.classList.add('book');
  book.innerHTML = `
    <h2>${title}</h2>
    <h3>${author}</h3>
    <p>${pages} pages</p>
    <p>${status}</p>
  `;
  addBookCard.insertAdjacentElement('afterend', book);
}

addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').value;

  if (title && author && pages) {
    const book = new Book(title, author, pages, status);
    Library.push(book);
    console.log(Library);
    popup.style.display = 'none';
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#status').value = 'want-to-read';
  } else {
    alert('Please fill in all fields');
  }
  addFirstBook(Library[Library.length-1].title, Library[Library.length-1].author, Library[Library.length-1].pages, Library[Library.length-1].status);
});

function displayBooks(books) {
  searchResults.innerHTML = '';
  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('card');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <h3>${book.author}</h3>
      <p>${book.pages} pages</p>
      <p>${book.status}</p>
    `;
    searchResults.appendChild(bookElement);
  });
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  if (query) {
    const filteredBooks = Library.filter(book => book.title.toLowerCase().includes(query));
    if (filteredBooks.length > 0) {
      displayBooks(filteredBooks);
    } else {
      searchResults.innerHTML = '<p>No books found</p>';
    }
  } else {
    displayBooks(Library);
  }
});

// Initial display of all books
displayBooks(Library);