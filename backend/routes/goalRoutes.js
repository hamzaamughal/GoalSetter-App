const express = require('express');
const {
  getGoals,
  updateGoal,
  deleteGoal,
  setGoal,
} = require('../controllers/goalController');
const router = express.Router();

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;
