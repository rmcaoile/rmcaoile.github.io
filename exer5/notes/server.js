import express from 'express';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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