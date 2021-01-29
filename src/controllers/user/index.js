const userModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PWA = "pwa";

module.exports = {
  validate: async (req, res, next) => {
    try {
      const { data, error, message } = await userModel.validateUser(
        req.body.user,
        req.body.password
      );
      if (!error) {
        console.log(data);
        const token = jwt.sign({ userId: data }, PWA, {
          expiresIn: "1h",
        });
        res.json({ message: message, token: token });
        return;
      }
      res.json({ message: message });
      console.log(error, message);
    } catch (e) {
      next(e);
    }
  },
  getAllUser: async (req, res, next) => {
    const user = await userModel.find({});
    if (res.status(200)) {
      console.log({ user });
      res.send({ user });
    } else {
      res.send(console.log(res.status));
    }
  },

  getById: async (req, res, next) => {
    const user = await userModel.findById(req.params.id);
    res.json(user);
  },
  createUser: async (req, res, next) => {
    console.log(req.body, "no deberia ir aca");
    try {
      const users = userModel(({ role, user, password } = req.body));
      const data = await users.save();
      res.status(201).send({ data });
    } catch (e) {
      console.log(e);
      res.status(200).send({ message: e.message });
    }
  },
  updateProducts: async (req, res, next) => {
    const product = await userModel.update({ _id: req.params.id }, req.body, {
      multi: fase,
    });
  },
  deleteUser: async (req, res) => {
    const user = await userModel.deleteOne({ _id: req.params.id });
  },
};
