import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValues, setInputValues] = useState({
    name: "",
    numberResult: "",
  });

  const onCategoryChange = ({ target }) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      name: target.value.trim(),
    }));
  };

  const onLimitResultsChange = ({ target }) => {
    const value = target.value;
    if (value === "" || Number(value) > 0) {
      setInputValues((prevValues) => ({
        ...prevValues,
        numberResult: value,
      }));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValues.name.trim().length <= 1) return;

    onNewCategory({
      valueSearch: inputValues.name,
      numberSearch: Number(inputValues.numberResult),
    });

    setInputValues({
      name: "",
      numberResult: "",
    });
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        placeholder="Busca tus GIF"
        value={inputValues.name}
        onChange={onCategoryChange}
      />
      <input
        type="number"
        placeholder="Número de resultados (Max: 50)"
        value={inputValues.numberResult}
        onChange={onLimitResultsChange}
      />
      <input type="submit" style={{ display: 'none' }} />
    </form>
  );
};