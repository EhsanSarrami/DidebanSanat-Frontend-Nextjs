import { useState, useEffect } from "react";
import Axios from "../../../../src/services/AxiosConfig";
import { SEARCH_PRODUCTS } from "../../../graphql";
import { emptyStrRegEx } from "../../../validations/Regex";

const useSearchProduct = (isOpen) => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // handle get input value
  const getInputValue = (event) => setInputValue(event.target.value);

  // use effect hook to fetch products
  useEffect(() => {
    const handleSearchProducts = async () => {
      try {
        const {
          data: {
            data: { products },
          },
        } = await Axios(SEARCH_PRODUCTS, { search: inputValue });
        // set data in state
        setSearchResults(products);
      } catch (error) {
        console.log(error);
      }
    };

    // if search input have a valid value search
    if (!inputValue.match(emptyStrRegEx) && inputValue !== "")
      handleSearchProducts();

    return () => {
      setSearchResults([]);
    };
  }, [inputValue]);

  useEffect(() => {
    if (!isOpen) {
      setInputValue("");
      setSearchResults([]);
    }
  }, [isOpen]);

  return { getInputValue, inputValue, searchResults };
};

export default useSearchProduct;
