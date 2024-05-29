const { get } = require("../routes/userRoutes");

const getAllUsers = (req, res) => {
  const data = {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
  };

  res.json({
    message: "GET all users success",
    data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "POST create user success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json({
    message: "PUT update user success",
    data: req.body,
  });
  console.log(req.body);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
};
