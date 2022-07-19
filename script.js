let myLibrary = [];

// Constructor function
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

const Book1 = new Book("My little pony","Dr.Dre", 234, "read");
const Book2 = new Book("My little boy","Dr.me", 24, "not read");
const Book3 = new Book("My pony","Dr.yo", 34, "read");


myLibrary.push(Book1);
myLibrary.push(Book2);
myLibrary.push(Book3);

console.log(myLibrary);

function addBookToLibrary() {
};
