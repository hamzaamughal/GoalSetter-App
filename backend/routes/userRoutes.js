const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const router = require('express').Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe);

module.exports = router;
