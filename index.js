const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

//middleware
const logger = (req,res, next) =>{
    console.log(`$(req.method) ${req.url}`);
    next();
}
app.use(logger);
app.use(morgan('dev'));
app.set('view engine','ejs');



const router = require('./routes/router');
app.use(router);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

//router
app.use('/', router)
app.get('/home',(req, res) =>
    res.send('halaman home')
);

app.get('/datajson',(req, res) =>
    res.json([{
        'id':1,
        'name':'rizki',
    },{
        'id':2,
        'name':'joko'
    }])
);

app.use(function (req, res, next){
    res.status(404).json({
        status :'failed',
        errors : 'not found'
    });
}

);

app.listen(port,() => console.log(`working at http://localhost:/${port}`))

