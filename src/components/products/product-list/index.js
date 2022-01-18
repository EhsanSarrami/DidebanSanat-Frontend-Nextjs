import { useState, useEffect } from "react";
import { ProductListContainer, ProductListWrapper } from "./style";
import CategoryFilter from "../../category-filter";
import ProductCard from "../product-card";
import useGetHashUrl from "../../../hooks/useGetHashUrl";
import funcReplaceAll from "../../../helper/funcReplaceAll";
import ContentNotFound from "../../content-not-found";

const ProductList = ({ data, categories, type }) => {
  const [filteredData, setFilteredData] = useState(data);

  // use hash url hook
  const { hashUrl, hasHash } = useGetHashUrl();

  // filter data
  useEffect(() => {
    if (type === "parent") {
      setFilteredData(
        data.filter((product) => {
          if (funcReplaceAll(product.parentCategory.name, " ", "-") === hashUrl)
            return true;
          if (!hasHash) return data;
        })
      );
    } else {
      setFilteredData(
        data.filter((product) => {
          if (
            funcReplaceAll(product.productSecondSubCategory.name, " ", "-") ===
            hashUrl
          )
            return true;
          if (!hasHash) return data;
        })
      );
    }
  }, [hashUrl]);

  return (
    <ProductListContainer
      className="container flex-wrapper flex-center"
      data-aos="fade-up"
    >
      <CategoryFilter data={categories} />

      {data.length > 0 ? (
        <ProductListWrapper className="wrapper">
          {filteredData.map((item) => (
            <ProductCard data={item} key={item.id} type={type} />
          ))}
        </ProductListWrapper>
      ) : (
        <ContentNotFound type="product" name="محصول مورد نظر شما" />
      )}
    </ProductListContainer>
  );
};

export default ProductList;
