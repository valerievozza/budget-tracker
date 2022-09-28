const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  expense: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   require: true,
  // },
  // cloudinaryId: {
  //   type: String,
  //   require: true,
  // },
  cost: {
    type: Number,
    required: true,
  },
  frequency: {
    num: {
      type: Number,
      default: 1,
    },
    unit: {
      type: String,
      default: 'months',
      enum: ['days', 'weeks', 'months', 'years']
    }
  },
  category: {
    type: String,
  },
  due: {
    type: Date,
  },
  fundsSource: {
    type: String,
  },
  notes: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  deleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
