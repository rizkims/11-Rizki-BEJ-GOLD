const express = require('express');
const app = express();
const port = 3000;

//middleware
const logger = (req,res, next) =>{
    console.log(`$(req.method) ${req.url}`);
    next();
}
app.use(logger);

app.get('/',(req, res) =>
    res.send('Hello World')
);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//router


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

