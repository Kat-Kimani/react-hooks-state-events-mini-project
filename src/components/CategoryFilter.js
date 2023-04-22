import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleBtn(category) {
    setSelectedCategory(category);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}

      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleBtn(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
