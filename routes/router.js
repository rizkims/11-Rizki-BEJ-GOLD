const express = require('express')
const router = express.Router()
const storeRoutes = require('./store.route')
const employeeRoutes = require('./employee.route')

router.get('/',function (req, res) {
        res.render('index')
    }
);

router.get('/about',function (req, res) {
        res.send('about page')
    }
);
router.use('/store', storeRoutes)
router.use('/employee', employeeRoutes)
module.exports = router;