const express = require('express');
const app = express();
const port = 3000;

// parsing application
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
// send HTML file on GET request
    res.sendFile(__dirname + '/index.html'); 
});

app.post('/submit-form', (req, res) => {
    // de-structure username from form data

    const { username } = req.body; 

    // send a response back to the client
    res.send(`Username is ${username}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
