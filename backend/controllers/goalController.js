// @desc  Get Goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
  res.send('getGoals');
};
// @desc  Set Goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  res.send('setGoals');
};
// @desc  Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
};
// @desc  Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
