const express = require('express')
const router = express.Router()
const store = require('../handler/store.handler')

router.get('/', (req, res) => {
        res.json({
            message:'store handler'
        })
    }
);

router.get('/store', (req, res) => {
        res.send('about page store')
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