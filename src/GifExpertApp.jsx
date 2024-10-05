import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(
    ['Overwatch']
  )

  const [ limitResults, setLimitResults ] = useState(10)

  const onAddCategory = (newCategory) => {
    if(categories.map(c => c.toLowerCase()).includes(newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <div>

      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
      />

      {categories.map(category => (
        <GifGrid 
          key={category}
          category={category} 
          limitResults={limitResults}
        />
      ))}

      

    </div>
  )
}
