import React from "react";

export const ListCategories = ({ categories, setCategories }) => {

    const handleOrderBy = (category) => {

        const index = categories.findIndex(categoryArr => categoryArr.valueSearch === category.valueSearch)

        if(index !== -1){
            const newCategories = [...categories]
            // Guardar el elemento de forma temporal sabiendo que hubo un array
            const [ selectedCategory ] = newCategories.splice(index, 1)
            newCategories.unshift(selectedCategory)
            setCategories(newCategories);
        }
    }

  const handleDeleteCategory = (category, event) => {
    event.stopPropagation()
    if (categories.includes(category)) {
      const categorieDelete = categories.filter(
        categoryArr => categoryArr.valueSearch !== category.valueSearch
      );
      setCategories(categorieDelete);
    }
  };

  return (
    <div className="container-list-categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-button"
          onClick={() => handleOrderBy(category)}
        >
          {category.valueSearch}({category.numberSearch === 0 ? '50': category.numberSearch})
          <span
            className="remove-button"
            onClick={(event) => handleDeleteCategory(category, event)}
          >
            ✖
          </span>
        </button>
      ))}
    </div>
  );
};
