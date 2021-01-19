const express = require("express");
const router = express.Router();
const userControler = require("../../controllers/user/indexWeb");

router.get("/", userControler.getAllUser);
router.get("/:id", userControler.getById);
router.post("/", userControler.createUserWeb);
router.post("/login", userControler.login);
router.put("/:id", userControler.updateProducts);
router.delete("/:id", userControler.deleteUser);

module.exports = router;
