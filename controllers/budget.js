// const cloudinary = require("../middleware/cloudinary");
const Expense = require("../models/Expense");

module.exports = {
  getBudget: async (req, res) => {
    try {
      const expenses = await Expense.find().sort({ createdAt: "desc" }).lean();
      res.render("budget.ejs", { expenses: expenses });
    } catch (err) {
      console.error(err);
    }
  },
  getExpense: async (req, res) => {
    try {
      const expense = await Expense.findById(req.params.id);
      res.render("expense.ejs", { expense: expense, user: req.user });
    } catch (err) {
      console.error(err);
    }
  },
  getAddExpense: (req, res) => {
    try {
      res.render("add.ejs");
    } catch (err) {
      console.error(err);
    }
  },
  createExpense: async (req, res) => {
    try {
      // // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req.file.path);
      await Expense.create({
        name: req.body.name,
        amount: req.body.amount,
        frequency: req.body.frequency,
        category: req.body.category,
        due: req.body.due,
        fundsSource: req.body.fundsSource,
        notes: req.body.notes,
        user: req.user.id,
      });
      console.log(`Expense ${expenseName} created`);
      res.redirect("/budget");
    } catch (err) {
      console.error(err);
    }
  },
  deleteExpense: async (req, res) => {
    try {
      let expense = await Expense.findById(req.params.id);

      // ! Check if this works
      await Expense.findOneAndUpdate({ _id: req.params.id, deleted: true });
      console.log(`Updated expense ${expenseName}`);
      res.redirect("/budget");
    } catch (err) {
      console.error(err)
      res.redirect("/budget");
    }
  },
};
