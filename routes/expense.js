const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer");
const expenseController = require("../controllers/expense");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, expenseController.getExpense);

router.get("/add", ensureAuth, expenseController.getAddExpense)

router.post("/createExpense", expenseController.createExpense);

router.put("/deleteExpense/:id", expenseController.deleteExpense);

module.exports = router;
