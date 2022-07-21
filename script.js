// Stores book objects
const myLibrary = [];

// Fetches table element from DOM
const table = document.querySelector('table');

// Constructor function
function bookConstructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

// Displays books inside myLibrary as table
function addBookToLibrary() { 
    // Clearing table so that previously entered data doesn't repeat
    table.innerHTML = `
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>`;

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
        tableCellArray[3].innerHTML = `<button class="toggle" id="TCT-${i}">${myLibrary[i].status}</button>`;
        tableCellArray[4].innerHTML = `<button class="delete" id="TCD-${i}">Delete</button>`;

        // Adding tableRow inside table
        table.appendChild(tableRow);

        // Adding tableCells inside tableRow
        for (let k = 0; k < tableCellArray.length; k++) {
            tableRow.appendChild(tableCellArray[k]);
        };
    };   
};

// Triggers on hitting submit button
document.addEventListener('submit', function(event) {
	// Prevent default form submit
	event.preventDefault();

    // Collecting user entries from FORM inputs
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let status = document.querySelector('#status').value;

    let NewBook = new bookConstructor(title, author,  pages, status);
    myLibrary.push(NewBook);

    // Adding book on DOM
    addBookToLibrary();

	// Clear the form fields
	event.target.reset();
});

// Triggers on clicking buttons on table
table.addEventListener("click", function(event) {
    // Removes object from object array on clicking delete
    if ( event.target.className === 'delete') {

        // Extracts common number from id which is index of object
        let id = (event.target.id).slice(4);
        myLibrary.splice(id, 1); 

        // Displays new array on table
        addBookToLibrary();

    // Changes status on clicking toggle button
    } else if (event.target.className === 'toggle') {
        // Extracts common number from id which is index of object
        let id = (event.target.id).slice(4);

        // Using ternary operator
        myLibrary[id].status = myLibrary[id].status === 'Read' ? 'Not read': 'Read';

        // Displays new array on table
        addBookToLibrary();
    };
});