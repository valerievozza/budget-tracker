const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer");
const budgetController = require("../controllers/budget");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, budgetController.getExpense);

router.post("/createExpense", budgetController.createExpense);

router.put("/deleteExpense/:id", budgetController.deleteExpense);

module.exports = router;
