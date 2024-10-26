import { useState } from "react";

export const AddCategory = ({ onNewCategory, limitResults, setLimitResults }) => {
  
  const [inputValue, setInputValue] = useState("");

  const onCategoryChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onLimitResultsChange = ({ target }) => {
    const value = Number(target.value);
    if (!isNaN(value) && value > 0) {
      setLimitResults(value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    // Validación caracteres del input
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit } className="form">
      <input
        type="text"
        placeholder="Busca tus GIF"
        value={ inputValue }
        onChange={ onCategoryChange }
      />
      <input
        type="text"
        placeholder="Número de resultados (Max: 50)"
        value={ limitResults }
        onChange={ onLimitResultsChange }
      />
      <input type="submit" style={{ display: 'none' }} />
    </form>
  );
};
