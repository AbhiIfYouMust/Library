let myLibrary = [];

// Constructor function
function bookConstructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

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

document.addEventListener('submit', function (event) {
	// Prevent default form submit
	event.preventDefault();

    // Collecting user entries from FORM inputs
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let status = document.querySelector('#status').value;

    let NewBook = new bookConstructor(title, author,  pages, status);
    myLibrary.push(NewBook);
    addBookToLibrary();

	// Clear the form fields
	event.target.reset();
});