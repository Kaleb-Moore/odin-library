const books = document.querySelector(".books");
const addBtn = document.querySelector(".add-button");

let myLibrary = [];

function Book(Title, Author, Pages, Read) {
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.read = Read;
};

function addBooksToPage(){
    let addedBooks = myLibrary.map(book => (`
    <div class="book">
        <h1 class="book-title"> Title: ${book.title} </h1>
        <h2 class="book-author"> Author: ${book.author} </h2>
        <p class="book-pages"> ${book.pages} Pages </p>
        <div class="read-toggle">
            <label for="read" class="book-read">Read</label>
            <input type="checkbox" class="read-checked" name="read">
        </div>
        <button class="delete">Delete Book</button>
    </div>
    `)).join(' ');
    books.innerHTML = addedBooks;
};

function isChecked() {
    let delBtn = document.querySelectorAll(".delete");
    let checkbox = document.querySelectorAll(".read-checked");
    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].read == true) {
            checkbox[i].checked = true
        };
        delBtn[i].addEventListener('click', (e) => {
            myLibrary.splice(e.target.parentNode.id, 1);
            e.target.parentElement.remove();
        });
        checkbox[i].addEventListener('change', (e) => {
            if (e.target.checked) {
                myLibrary[i].read = true;
            } else {
                myLibrary[i].read = false;
            }
        });
    }
};

function reIndex () {
    let book = document.querySelectorAll(".book");
    for (let i = 0; i < myLibrary.length; i++){
        book[i].setAttribute("id", i);
    }
}


addBtn.addEventListener("click", (e) => {
    let title = document.querySelector(".title-input");
    let author = document.querySelector(".author");
    let pages = document.querySelector(".pages");
    let read = document.querySelector(".read");

    let haveRead = false;
    
    if(read.checked == true) {
        haveRead = true;
    }

    myLibrary.push(new Book(title.value, author.value, pages.value, haveRead));

    haveRead = false;
    addBooksToPage();
    isChecked();

    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
});

document.querySelector('body').addEventListener('click', (e) => {
    reIndex();
})
