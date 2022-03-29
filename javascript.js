let myLibrary = [
    {
        title: 'The Bible',
        author: 'God',
        pages: '1000',
        read: true,
    }
];

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

    if (read.checked) {
        newBook.read = true;
    } else {
        newBook.read = false;
    }

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
    displayLibrary();
})

const bookshelf = document.getElementById('bookshelf');

myLibrary.forEach(element => {
    const newDiv = document.createElement('div');
    
    newDiv.className = 'book';
    bookshelf.appendChild(newDiv);

    const bookDiv = document.querySelector('.book');

    for (const prop in element) {
        const subDiv = document.createElement('div');
        subDiv.className = prop;
        subDiv.textContent = `${element[prop]}`;
        bookDiv.appendChild(subDiv);
    }
});

function displayLibrary() {
    const newDiv = document.createElement('div');
    const newBook = myLibrary[myLibrary.length - 1];
    const button =document.createElement('button');

    newDiv.className = 'book';
    bookshelf.appendChild(newDiv);
    const bookDiv = document.querySelector('.book');

    for (const prop in newBook) {
        if (prop === 'read') {
            if (newBook.read === true) {
                button.textContent = 'Read';
                bookDiv.appendChild(button);
            } else if (newBook.read === false) {
                button.textContent = 'Unread';
                bookDiv.appendChild(button);
            } 
        } else {
            const subDiv = document.createElement('div');
            subDiv.className = prop;
            subDiv.textContent = `${newBook[prop]}`;
            bookDiv.appendChild(subDiv);
        }
    }
}


