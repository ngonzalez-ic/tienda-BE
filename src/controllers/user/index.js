const userModel = require("../../models/user");
const { getById } = require("../product");

module.exports = {
  getAllUser: async (req, res) => {
    const user = await userModel.find({});
    if (res.status(200)) {
      console.log({ user });
      res.send({ user });
    } else {
      console.log(res.status);
      res.send(console.log(res.status));
    }
  },

  getById: async (req, res) => {
    console.log(req.params.id);
    const user = await userModel.findById(req.params.id);
    res.json(user);
  },
  createUser: async (req, res) => {
    console.log(req.body);
    try {
      const users = userModel(({ role, user, password } = req.body));
      const userSave = await users.save();
      res.status(201).send({ userSave });
    } catch (e) {
      console.log(e);
      res.status(200).send({ message: e.message });
    }
  },
  updateProducts: async (req, res) => {
    const product = await userModel.update({ _id: req.params.id }, req.body, {
      multi: fase,
    });
  },
  deleteUser: async (req, res) => {
    console.log(req.params.id);
    const user = await userModel.deleteOne({ _id: req.params.id });
  },
};
