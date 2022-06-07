const books = document.querySelector(".books");
const addBtn = document.querySelector(".add-button");

let myLibrary = [];

function Book(Title, Author, Pages, Read) {
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.read = Read;
};

function addBookToLibrary() {
    Book(title, author, pages, read);
};

function addBooksToPage(){
    myLibrary.map(book => {
        if (book.read === true) {
            `<div class="book">
                <h2 class="book-title"> ${book.Title} </h2>
                <h3 class="book-author"> ${book.Author} </h3>
                <p class="book-pages"> ${book.Pages} Pages </p>
                <input type="checkbox" checked>
            </div>`
        } else {
            `<div class="book">
                <h2 class="book-title"> ${book.Title} </h2>
                <h3 class="book-author"> ${book.Author} </h3>
                <p class="book-pages"> ${book.Pages} Pages </p>
                <input type="checkbox">
            </div>`
        }
        
    })
};

addBtn.addEventListener("click", (e) => {
    console.log('clicked');
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    let read = document.querySelector(".read").value;

    let haveRead = false;
    
    if(read == 'on') {
        haveRead = true;
    }

    myLibrary.push(new Book(title, author, pages, haveRead));

    haveRead = false;
});

