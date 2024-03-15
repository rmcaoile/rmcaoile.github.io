import needle from 'needle';

needle.post(    
    'http://localhost:3000/add-books',
    { book_name: "Harry Potter and the Philosopher’s Stone",
      isbn: "978-0-7475-3269-9",
      author: "J.K Rowling",
      year_published: "",
    },
    (err, res) => {
      console.log(res.body)   // prints the server’s response “Received a POST request.”
    }
);

// needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9', (err, res) => {
//     // console.log(res.body);   // prints the body of the response message. In this case, “Hello”
//     console.log(res.body);
// });


// needle.get('http://localhost:3000/', (err, res) => {
//     console.log(res.body);   // prints the body of the response message. In this case, “Hello”
//     console.log(res.statusCode);
// });

// needle.get('http://localhost:3000/greeting?name=Ralph', (err, res) => {
//     // console.log(res.body);   // prints the body of the response message. In this case, “Hello”
//     console.log(res.body);
// });

// needle.post(    
//     'http://localhost:3000/submit-data',
//     {name: "Ralph",
//      age: "21"},
//     (err, res) => {
//       console.log(res.body)   // prints the server’s response “Received a POST request.”
//     }
// );
  
