import express from 'express';
import { appendFileSync } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-books', (req, res) => {
    const book_data = [];     // Initializing array to insert book data

    // Appending values from request to the array
    book_data.push(req.body.book_name);
    book_data.push(req.body.isbn);
    book_data.push(req.body.author);
    book_data.push(req.body.year_published);


    if (book_data[0] != undefined && book_data[1] != undefined && book_data[2] != undefined && book_data[3] != undefined) {        // Check if all fields are present
        // console.log("All fields present");
        if (book_data[0] != "" && book_data[1] != "" && book_data[2] != "" && book_data[3] != "") {        // Check if no entries are empty strings
            // console.log("All field are not empty strings");                 
            appendFileSync('books.txt', book_data[0] + ", " + book_data[1] + ", " + book_data[2] + ", " + book_data[3] + "\n");     // Appending the data to books.txt
            res.json({ success: true })         // Response to the successful request
        }
        else {
            res.json({ success: false })        // Response to the unsuccessful request due to empty string input
        }
    }
    else {
        res.json({ success: false })            // Response to the unsuccessful request due to missing input
    }
}

);

// Response GET method for retrieving the value of ISBN and Author
app.get('/find-by-isbn-author', (req, res) => {
    res.send('\nISBN: ' + req.query.isbn + "\nAuthor: " + req.query.author);
    // console.log(req);
});

// Same response GET method as #2 but with Author as the only parameter.
app.get('/find-by-author', (req, res) => {
    res.send("\nAuthor: " + req.query.author);
    // console.log(req);
});



// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received
app.get('/', (req, res) => {
    res.send('Hello! This is Ralph Philip\'s server');
    //   console.log(res);
    //   console.log(req);
});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000') });

