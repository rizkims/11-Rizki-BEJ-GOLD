const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) =>
    res.send('Hello World')
);

app.get('/datajson',(req, res) =>
    res.json([{
        'id':1,
        'name':'rizki',
    },{
        'id':2,
        'name':'jono'
    }])
);

app.listen(port,() => console.log(`working at http://localhost:/${port}`))

