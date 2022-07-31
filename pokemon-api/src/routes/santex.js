var express = require('express');
var router = express.Router();
const { postTeam, getTeamList, getTeam, putTeam, deleteTeam } = require('../controllers/team');
const { validatePostTeam } = require('../middlewares/team');
const { isAuthenticated, validateIfNotValidatorError } = require('../middlewares/general');

/* GET home page. */
router.get('/', isAuthenticated, getTeamList);
router.get("/", async (req, res) =>{
    try{
        const name = req.query.name;
        console.log(name, typeof name)
        let countriesTotal = await getAllCountries();
        if (name){
            let countryName = countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send("nonexistent country")
        } else if(countriesTotal){
            res.status(200).send(countriesTotal)
        }
    }
    catch(e){res.status(404).send("nonexistent country")}
});


router.post('/', isAuthenticated, ...validatePostTeam, validateIfNotValidatorError, postTeam);

router.put('/:name', isAuthenticated, putTeam);

//router.get('/:name', isAuthenticated, getTeam);

router.delete('/:name', isAuthenticated, deleteTeam);
module.exports = router;