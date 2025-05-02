import React, { useState } from "react";

const AddExpenses = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Submitted:", expense);
    // Dispatch action or make API call to save expense
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter expense title"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter expense amount"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            value={expense.category}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter expense category"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenses;