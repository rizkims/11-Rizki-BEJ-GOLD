const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) =>
    res.send('Hello World s')
);

app.listen(port,() => console.log(`working at http://localhost:/${port}`))

