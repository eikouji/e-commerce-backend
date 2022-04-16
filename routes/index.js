const router = require('express').Router();
const apiRoutes = require('./api');

const dotenv = require('dotenv');


router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

dotenv.config();
console.log(process.env.USERNAME) // username //

module.exports = router;