import React from "react";

export const ListCategories = ({ categories, setCategories }) => {

  // Ordenar los elementos
    const handleOrderBy = (category) => {

        const index = categories.findIndex(categoryArr => categoryArr === category)

        if(index !== -1){
            // Hacemos una copia del arreglo original
            const newCategories = [...categories]
            // Obtenemos la category que vamos a eliminar y la almacenamos temporalmente
            const [selectedCategory] = newCategories.splice(index, 1)
            newCategories.unshift(selectedCategory)
            setCategories(newCategories);
        }
    }

  //Eliminar el elemento buscado
  const handleDeleteCategory = (category, event) => {
    event.stopPropagation()
    if (categories.includes(category)) {
      const categorieDelete = categories.filter(
        (categoryArr) => categoryArr !== category
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
          {category}
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
