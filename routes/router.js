const express = require('express');
const router = express.Router();

router.get('/',function (req, res) {
        res.send('my home page')
    }
);

router.get('/about',function (req, res) {
        res.send('about page')
    }
);

module.exports = router;