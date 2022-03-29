let myLibrary = [
    {
        title: 'book1',
        author: 'author one',
        pages: 123,
        read: true,
    },
    {
        title: 'book2',
        author: 'author two',
        pages: 234,
        read: false,
    },
    {
        title: 'book3',
        author: 'author three',
        pages: 345,
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

// window.onclick = function(e) {
//     if (e.target !== modal) {
//         modal.style.display = 'none';
//     }
// }

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

const form = document.getElementsByTagName('form')[0];

submit.addEventListener('click', function() {
    
    /* if (!title.validity.valid) {
        alert('error');
    } else { */
    
        modal.style.display = 'none';
        addBookToLibrary();
        clearForm();
        const newBook = myLibrary[myLibrary.length - 1];
        displayLibrary(newBook);
})

const bookshelf = document.getElementById('bookshelf');

myLibrary.forEach(element => {
    displayLibrary(element);
});


function displayLibrary(newBook) {
    const newDiv = document.createElement('div');
    const button =document.createElement('button');

    newDiv.className = 'book';
    bookshelf.appendChild(newDiv);
    const bookDiv = document.querySelector('.book:last-of-type');

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


