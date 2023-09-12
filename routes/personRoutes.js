const  express = require("express");
const router = express.Router();
const { 
    getUsers, 
    createPerson,
    getPerson, 
    updatePerson, 
    deletePerson, 
}= require("../controllers/personController")


router.route ("/").get ( getUsers ).post( createPerson )
router.route ("/user/:id").get( getPerson ).put( updatePerson ).delete( deletePerson )


module.exports = router;
