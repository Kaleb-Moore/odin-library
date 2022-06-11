const books = document.querySelector(".books");
const addBtn = document.querySelector(".add-button");

let myLibrary = [];

function Book(Title, Author, Pages, Read) {
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.read = Read;
};

const book1 = new Book("Well fuck", "Kaleb", "23", false);
const book2 = new Book("Well fuck again", "Kaleb", "2334", true);
const book3 = new Book("Well fuck off", "Kaleb Moore", "263", false);

myLibrary = [book1, book2, book3]

function addBooksToPage(){
    let addedBooks = myLibrary.map(book => (`
    <div class="book">
        <h1 class="book-title"> ${book.title} </h1>
        <h2 class="book-author"> ${book.author} </h2>
        <p class="book-pages"> ${book.pages} Pages </p>
        <input type="checkbox" class="read-checked">
        <button class="delete">Delete</button>
    </div>
    `)).join(' ');
    books.innerHTML = addedBooks;
};

function isChecked() {
    let checkbox = document.querySelectorAll(".read-checked");
    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].read == true) {
            checkbox[i].checked = true
        }
    }
};

addBtn.addEventListener("click", (e) => {
    console.log('clicked');
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    let read = document.querySelector(".read").checked;

    let haveRead = false;
    
    if(read == true) {
        haveRead = true;
    }

    myLibrary.push(new Book(title, author, pages, haveRead));

    haveRead = false;
    addBooksToPage();
    isChecked();
});

addBooksToPage();
isChecked();