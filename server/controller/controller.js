var Userdb = require("../model/model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emplty" });
    return;
  }
  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occured while creating a create operation",
      });
    });
};

//retrieve and return all user/retrieve and return a single user

exports.find = (req, res) => {};

// update a new identified user by user id
exports.update = (req, res) => {};

// delete a user with specified user id in the request
exports.delete = (req, res) => {};
