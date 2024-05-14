const express = require('express')
const router = express.Router()
const store = require('../handler/employee.handler')

router.get('/', (req, res) => {
        res.json({
            message:'employee handler'
        })
    }
);

router.get('/employee', (req, res) => {
        res.send('about page employee')
    }
);

router.post('/', (req, res) => {
    return store.CreateStoreHandler();
}
);

router.put('/', (req, res) => {
   return store.UpdateStoreHandler();
}
);

router.delete('/', (req, res) => {
    return store.DeleteStoreHandler();
}
);

module.exports = router;