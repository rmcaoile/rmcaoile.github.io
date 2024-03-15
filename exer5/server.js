import express from 'express';
import { appendFileSync } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-books', (req, res) => {  
    // res.json({success: true})  
    // addBook(req, res);     // call saveBook function

    const book_detail = [];

    book_detail.push(req.body.book_name);
    book_detail.push(req.body.isbn);
    book_detail.push(req.body.author);
    book_detail.push(req.body.year_published);


    if (book_detail.length == 4) {        // Check if all fields are present
        console.log("All fields present");        
        for (let i=0; i<4; i++){
            if (book_detail[i] != "") {
                // console.log("All field are not empty strings");                 
                appendFileSync('books.txt', book_detail[0]+", "+ book_detail[1]+", "+book_detail[2]+", "+book_detail[3]+"\n");     // Appending the data to books.txt
                res.json({success: true})                
            }
            else {
                res.json({success: false})     
            }
        }
    }
    else {
        res.json({success: false})     
    }

});

app.get('/find-by-isbn-author', (req, res) => {
    res.send('Hello ' + req.query.name);
    console.log(req);
});



// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received
app.get('/', (req, res) => {
    res.send('Hello! this is Ralph\'s server');
//   console.log(res);
//   console.log(req);
});

app.post('/submit-data', (req, res) => {
    res.send('Received a POST request from ' + req.body.name + '\nTheir age is ' + req.body.age);    
    // res.send('Their age is ' + req.body.age);
    res.json({success: true})
    // ('Received a POST request from ' + req.body.name + '\nTheir age is ' + req.body.age);    
    
});

app.get('/greeting', (req, res) => {
    res.send('Hello ' + req.query.name);
    console.log(req);
});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );





// Function that add account to user.txt
const addBook = (res, req) => {
    res.json({success: true});
    const book_detail = [];

    book_detail.push(req.body.book_name);
    book_detail.push(req.body.isbn);
    book_detail.push(req.body.author);
    book_detail.push(req.body.year_published);


    if (book_detail.length == 4) {        // Check if all fields are present
        console.log("All fields present");        
        for (let i=0; i<4; i++){
            if (book_detail[i] != "") {
                console.log("All field are not empty strings");                 
                appendFileSync('books.txt', book_detail[0]+", "+ book_detail[1]+", "+book_detail[2]+", "+book_detail[3]+"\n");     // Appending the data to books.txt
                res.json({success: true})                
            }
            else {
                res.json({success: false})     
            }
        }
    }
    else {
        res.json({success: false})     
    } 
}