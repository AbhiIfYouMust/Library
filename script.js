let myLibrary = [];

// Constructor function
function bookConstructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

const Book1 = new bookConstructor("My little pony has a friend ","Dr.Dre", 234, "read");
const Book2 = new bookConstructor("My little boy","Dr.me", 24, "not read");
const Book3 = new bookConstructor("My pony","Dr.yo", 34, "read");


myLibrary.push(Book1);
myLibrary.push(Book2);
myLibrary.push(Book3);



function addBookToLibrary() { 
    // Fetches table element from DOM
    const table = document.querySelector('table');

    for(let i = 0; i < myLibrary.length; i++) {
        // Creating tableRow tag
        let tableRow = document.createElement('tr');
        const tableCellArray = [];

        // Creating five tableCell tag
        for (let j= 0; j < 5; j++) {
            let tableCell = document.createElement('td');
            tableCellArray.push(tableCell);
        };

        // Assigning content for each tableCell
        tableCellArray[0].textContent = myLibrary[i].title;
        tableCellArray[1].textContent = myLibrary[i].author;
        tableCellArray[2].textContent = myLibrary[i].pages;
        tableCellArray[3].textContent = myLibrary[i].status;
        tableCellArray[4].innerHTML = "<button>Delete</button>";

        // Adding tableRow inside table
        table.appendChild(tableRow);

        // Adding tableCells inside tableRow
        for (let k = 0; k < tableCellArray.length; k++) {
            tableRow.appendChild(tableCellArray[k]);
        };
    };   
};


addBookToLibrary();