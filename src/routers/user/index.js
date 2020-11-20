const express = require("express");
const router = express.Router();
const userControler = require("../../controllers/user");

router.get("/", userControler.getAllUser);
router.get("/:id", userControler.getById);
router.post("/", userControler.createUser);
router.post("/validate", userControler.validate);
router.put("/:id", userControler.updateProducts);
router.delete("/:id", userControler.deleteUser);

module.exports = router;
