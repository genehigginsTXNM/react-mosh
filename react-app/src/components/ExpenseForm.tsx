import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = [
  "Food",
  "Utilities",
  "Entertainment",
  "Transportation",
] as const;

const schema = z.object({
  Description: z
    .string()
    .trim()
    .min(1, { message: "Description must be at least 1 character long" }),
  Amount: z
    .number({ invalid_type_error: "Amount should be a number" })
    .min(1, { message: "Amount must be at least 1" }),
  Category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

const seedExpenses: FormData[] = [
  {
    Description: "Groceries",
    Amount: 85,
    Category: "Food",
  },
  {
    Description: "Electric Bill",
    Amount: 120,
    Category: "Utilities",
  },
  {
    Description: "Movie Tickets",
    Amount: 30,
    Category: "Entertainment",
  },
  {
    Description: "Gas",
    Amount: 45,
    Category: "Transportation",
  },
  {
    Description: "Dinner",
    Amount: 60,
    Category: "Food",
  },
];

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [expenses, setExpenses] = useState<FormData[]>(seedExpenses);
  console.log(expenses);

  const onSubmit = (data: FieldValues) => {
    setExpenses([...expenses, data as FormData]);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            {...register("Description")}
            id="Description"
            type="text"
            className="form-control"
          />
          {errors.Description && (
            <p className="text-danger">{errors.Description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            {...register("Amount", { valueAsNumber: true })}
            id="Amount"
            type="number"
            className="form-control"
          />
          {errors.Amount && (
            <p className="text-danger">{errors.Amount.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <select
            {...register("Category")}
            className="form-select"
            id="Category"
          >
            <option>Choose one…</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.Description}</td>
              <td>${expense.Amount.toFixed(2)}</td>
              <td>{expense.Category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    setExpenses(expenses.filter((_, i) => i !== index))
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseForm;
