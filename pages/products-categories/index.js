import Axios from "../../src/services/AxiosConfig";
import { GET_PRODUCTS_CATEGORIES } from "../../src/graphql";
import PagesHeader from "../../src/components/pages-header";
import PagesHeaderLocation from "../../src/json/location-data/ProductCategories.json";
import SectionTitle from "../../src/components/section-title";
import SectionTitleData from "../../src/json/section-title/ProductsCategories.json";
import ProductList from "../../src/components/products/product-list";

const ProductCategories = ({ firstSubCategories, parentCategories }) => {
  return (
    <>
      <PagesHeader
        title="محصولات دیده بان صنعت"
        locationList={PagesHeaderLocation}
        staticBg="pic1.jpg"
      />
      <SectionTitle {...SectionTitleData} spacTop="true" />
      <ProductList
        data={firstSubCategories}
        categories={parentCategories}
        type="parent"
      />
    </>
  );
};

export default ProductCategories;

export const getServerSideProps = async () => {
  // get products parent categories with products
  const {
    data: {
      data: { firstSubCategories, parentCategories },
    },
  } = await Axios(GET_PRODUCTS_CATEGORIES);
  return {
    props: {
      firstSubCategories,
      parentCategories,
    },
  };
};
