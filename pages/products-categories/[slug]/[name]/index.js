import React from "react";
import PagesHeader from "../../../../src/components/pages-header";
import Axios from "../../../../src/services/AxiosConfig";
import { SUB_PRODUCTS_CATEGORIES } from "../../../../src/graphql";
import PagesHeaderLocation from "../../../../src/json/location-data/ProductCategories.json";
import funcLocationGenerator from "../../../../src/helper/funcLocationGenerator";
import SectionTitle from "../../../../src/components/section-title";
import ProductList from "../../../../src/components/products/product-list";
import funcReplaceAll from "../../../../src/helper/funcReplaceAll";

const SubProductCategories = ({ data }) => {
  // destructure data
  const { image, name, firstSubCategory, productFirstSubCategory } = data;

  console.log(data);

  return (
    <>
      <PagesHeader
        title={name}
        locationList={funcLocationGenerator(PagesHeaderLocation, name)}
        DynamicBg={image}
      />
      <SectionTitle
        subTitle={`دسته بندی محصولات ${name}`}
        title={name}
        spacTop="true"
      />
      <ProductList
        data={productFirstSubCategory}
        categories={firstSubCategory}
        type="sub"
      />
    </>
  );
};

export default SubProductCategories;

export const getServerSideProps = async (context) => {
  // get products parent categories with products
  const {
    data: {
      data: { firstSubCategories },
    },
  } = await Axios(SUB_PRODUCTS_CATEGORIES, {
    name: funcReplaceAll(context.query.name, "-", " "),
  });

  return {
    props: {
      data: firstSubCategories[0],
    },
  };
};
