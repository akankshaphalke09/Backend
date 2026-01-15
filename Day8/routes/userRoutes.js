const express = require('express');
const router = express.Router(); // Notice we use Router() instead of express()

// This path is relative to where this router is "mounted"
router.get('/profile', (req, res) => {
  res.send('This is the User Profile page');
});
module.exports = router;