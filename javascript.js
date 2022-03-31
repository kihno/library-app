//Library
let myLibrary = [
    // {
    //     title: 'Neuromancer',
    //     author: 'William Gibson',
    //     pages: 271,
    //     read: true,
    // },
    // {
    //     title: 'Count Zero',
    //     author: 'William Gibson',
    //     pages: 256,
    //     read: false,
    // },
    // {
    //     title: 'Mona Lisa Overdrive',
    //     author: 'William Gibson',
    //     pages: 251,
    //     read: false,
    // }
];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Add Book Button
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('addBook');
const closeModal = document.getElementsByClassName('close')[0];

modalBtn.onclick = function() {
    modal.style.display = 'grid';
    title.focus();
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

//Form Submit Functions
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

function clearForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

const form = document.getElementById('form');

form.addEventListener('submit', function() {
    modal.style.display = 'none';
    addBookToLibrary();
    clearForm();
    const newBook = myLibrary[myLibrary.length - 1];
    displayLibrary(newBook);
});

myLibrary.forEach(element => {
    displayLibrary(element);
});

function displayLibrary(newBook) {
    const newDiv = document.createElement('div');
    const readButton = document.createElement('button');
    const bookshelf = document.getElementById('bookshelf');

    newDiv.className = 'book';
    newDiv.setAttribute('data-index', myLibrary.indexOf(newBook));
    bookshelf.appendChild(newDiv);
    const bookDiv = document.querySelector('.book:last-of-type');

    for (const prop in newBook) {
        if (prop === 'read') {
            if (newBook.read === true) {
                readButton.className = 'read';
                bookDiv.appendChild(readButton);
            } else if (newBook.read === false) {
                readButton.className = 'unread';
                bookDiv.appendChild(readButton);
            } 

        } else if (prop === 'author') {
            const subDiv = document.createElement('div');
            subDiv.className = prop;
            subDiv.textContent = `by ${newBook[prop]}`;
            bookDiv.appendChild(subDiv);
        } else if (prop === 'pages') {
            const subDiv = document.createElement('div');
            subDiv.className = prop;
            subDiv.textContent = `${newBook[prop]} pages`;
            bookDiv.appendChild(subDiv);
        } else {
            const subDiv = document.createElement('div');
            subDiv.className = prop;
            subDiv.textContent = `${newBook[prop]}`;
            bookDiv.appendChild(subDiv);
        }
    }

    readButton.addEventListener('click', () => {
        if (readButton.className === 'read') {
            readButton.className = 'unread';
        } else {
            readButton.className = 'read';
        }
    });

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.textContent = 'Remove';
    bookDiv.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
        myLibrary.splice(removeButton.parentNode.getAttribute('data-index'), 1);
        removeButton.parentNode.remove();
    });
}