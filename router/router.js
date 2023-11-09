const express=require('express')
const { adminLogin, userReg, userLogin, addbook } = require('../controllers/logic')
const router= new express.Router()

router.post('/admin-login',adminLogin)

// user reg
router.post('/user-registration',userReg)

// user login
router.post('/user-login',userLogin)

router.post('/admin-add-book',addbook)



module.exports=router