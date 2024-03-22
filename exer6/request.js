import needle from 'needle';

// // Sample 
// needle.post(
//   'http://localhost:3000/add-books',
//   {
//     book_name: "Harry Potter and the Philosopher’s Stone",
//     isbn: "978-0-7475-3269-9",
//     author: "J.K Rowling",
//     year_published: "1997",
//   },
//   (err, res) => {
//     console.log(res.body)   // prints the server’s response “{ success: true } or { success: false }”
//   }
// );

// needle.post(
//   'http://localhost:3000/add-books',
//   {
//     book_name: "Harry Potter and the Chamber of Secrets",
//     isbn: "0-7475-3849-2",
//     author: "J.K Rowling",
//     year_published: "1998",
//   },
//   (err, res) => {
//     console.log(res.body)   // prints the server’s response “{ success: true } or { success: false }”   
//   }
// );

needle.post(
  'http://localhost:3000/find-students-post',
  {
    age: 17
  },
  (err, res) => {
    console.log(res.body)   // prints the server’s response “{ success: true } or { success: false }”   
  }
);

// Request GET method for retrieving the value of ISBN and Author
needle.get('http://localhost:3000/find-students?fname=Peter', (err, res) => {
  console.log(res.body);   // prints the server’s response which is value of ISBN and Author”
});

// // Same request GET method as #2 but with Author as the only parameter.
// needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', (err, res) => {
//   console.log(res.body);   // prints the server’s response which is value of Author”
// });


