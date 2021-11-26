const express = require ("express");
const router = express.Router();
const {check, validationResult} = require ("express-validator");
const validator = [
    check ("name").notEmpty().withMessage("escribir un nombre"),
    check ("pass").notEmpty().withMessage("escribir una contrase&ntilde;a"),
    check ("age").notEmpty().withMessage("escribiuna edad")
]

router.get("/" ,(req, res)=>{

    res.render ("index");

});

router.post( "/", validator, (req,res)=>{
    res.send (validationResult (req))

})

module.exports = router;