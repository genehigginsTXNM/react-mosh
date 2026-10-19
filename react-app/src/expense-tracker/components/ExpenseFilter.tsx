import React from "react";
import categories from "./categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      id="category"
      //   value={selectedCategory}
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option>Choose one…</option>
      {categories.map((category) => (
        <option id={category} key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
