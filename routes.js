let express = require('express');
const action = require('./action')
const router = express.Router();

/* '/' call */
router.get('/',(req,res)=>{
    res.send("Hello Uma");
})

router.post('/registration',action.userRegister)

module.exports = router
