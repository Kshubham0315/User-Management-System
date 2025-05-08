const getAllUsers = (req, res) => {
  // Normally you'd fetch users from DB
  res.send(['Alice', 'Bob', 'Charlie']);
};

const addUser = (req, res) => {
  const { name } = req.body;
  res.send(`User ${name} added successfully!`);
};

module.exports = { getAllUsers, addUser };
