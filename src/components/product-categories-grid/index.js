import {
  ProductsCategoriesListContainer,
  ProductsCategoriesListWrapper,
} from "./style";
import SectionTitle from "../section-title";
import ProductListGridData from "../../json/section-title/ProductCategoriesGrid.json";
import ProductsCategoriesListCard from "./product-categories-grid-card";

const ProductsCategoriesList = ({ productCategories }) => {
  return (
    <ProductsCategoriesListContainer className="container flex-wrapper flex-center">
      <SectionTitle {...ProductListGridData} />
      <ProductsCategoriesListWrapper className="wrapper">
        {productCategories.map((item) => (
          <ProductsCategoriesListCard data={item} key={item.id} />
        ))}
      </ProductsCategoriesListWrapper>
    </ProductsCategoriesListContainer>
  );
};

export default ProductsCategoriesList;
