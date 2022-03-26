let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

function addBookToLibrary() {

    const newBook = Object.create(Book);
    newBook.title = title.value;
    newBook.author = author.value;
    newBook.pages = pages.value;
    newBook.read = read.value;

    myLibrary.push(newBook);
}

const submit = document.getElementById('submit');

function clearForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

submit.addEventListener('click', function() {
    addBookToLibrary();
    clearForm();
})

function displayLibrary() {
    const bookshelf = document.getElementById('bookshelf');
    const newDiv = document.createElement('div');

}