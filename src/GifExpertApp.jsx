import { useState } from "react"
import { AddCategory, GifGrid, ListCategories } from "./components/"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([])

  const [ limitResults, setLimitResults ] = useState('')

  const onAddCategory = (newCategory) => {
    if(categories.map(c => c.toLowerCase()).includes(newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <div>

      <h1>Gif-App</h1>

      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
        limitResults={limitResults}
        setLimitResults={setLimitResults}
      />

      <ListCategories 
        categories={categories} 
        setCategories={setCategories}
      />

      {categories.map(category => (
        <GifGrid 
          key={category}
          category={category} 
          limitResults={limitResults}
          setLimitResults={setLimitResults}
        />
      ))}

      

    </div>
  )
}
