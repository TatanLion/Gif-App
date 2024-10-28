import { useState } from "react";
import { AddCategory, GifGrid, ListCategories } from "./components/";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    const exists = categories.some(
      c => c.valueSearch.trim().toLowerCase() === newCategory.valueSearch.trim().toLowerCase()
    );

    if (exists) {
      toast.info("¡El elemento indicado ya existe!");
    } else {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <div>
      <h1>Gif-App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ToastContainer />
      
      <ListCategories 
        categories={categories} 
        setCategories={setCategories}
      />

      {categories.map(category => (
        <GifGrid 
          key={category.valueSearch}
          category={category}
        />
      ))}
    </div>
  );
};