import React from "react";
import { SearchFieldWrapper, SearchFieldInput } from "./style";
import { GoSearch } from "react-icons/go";

const SearchField = ({ mgTop, ...props }) => {
  return (
    <SearchFieldWrapper mgTop={mgTop}>
      <SearchFieldInput type="text" {...props} />
      <div className="search-field-icon">
        <GoSearch />
      </div>
    </SearchFieldWrapper>
  );
};

export default SearchField;
