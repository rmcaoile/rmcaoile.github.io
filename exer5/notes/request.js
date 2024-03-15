import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
    console.log(res.statusCode);
});

needle.get('http://localhost:3000/greeting?name=Ralph', (err, res) => {
    // console.log(res.body);   // prints the body of the response message. In this case, “Hello”
    console.log(res.body);
});

needle.post(    
    'http://localhost:3000/submit-data',
    {name: "Ralph",
     age: "21"},
    (err, res) => {
      console.log(res.body)   // prints the server’s response “Received a POST request.”
    }
  );
  
