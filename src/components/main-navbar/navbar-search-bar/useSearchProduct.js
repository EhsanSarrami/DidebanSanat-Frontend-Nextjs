import { useState, useEffect } from "react";

const useSearchProduct = () => {
  const [inputValue, setInputValue] = useState("");

  // handle get input value
  const getInputValue = (event) => setInputValue(event.target.value);

  // use effect hook to fetch products
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return { getInputValue, inputValue };
};

export default useSearchProduct;
