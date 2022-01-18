import React from "react";
import { useRouter } from "next/router";
import PagesHeader from "../../../../../src/components/pages-header";
import funcLocationGenerator from "../../../../../src/helper/funcLocationGenerator";
import PagesHeaderLocation from "../../../../../src/json/location-data/ProductCategories.json";
import { GET_PRODUCT_Detail } from "../../../../../src/graphql";
import Axios from "../../../../../src/services/AxiosConfig";
import { default as ProductDetailWrapper } from "../../../../../src/components/products/product-detail";

const ProductDetail = ({ product }) => {
  // destructure product
  const { title, image, productFirstSubCategory } = product;
  const { asPath } = useRouter();

  // get last page url
  const lastPageUrl = decodeURI(asPath).slice(
    0,
    decodeURI(asPath).lastIndexOf("/")
  );

  return (
    <>
      <PagesHeader
        title={title}
        locationList={funcLocationGenerator(
          [
            ...PagesHeaderLocation,
            {
              id: PagesHeaderLocation.length + 1,
              name: productFirstSubCategory.name,
              link: `${lastPageUrl}`,
            },
          ],
          title
        )}
        DynamicBg={image}
      />
      <ProductDetailWrapper data={product} />
    </>
  );
};

export default ProductDetail;

export const getServerSideProps = async (context) => {
  // get products detail
  const {
    data: {
      data: { product },
    },
  } = await Axios(GET_PRODUCT_Detail, {
    id: context.query.id,
  });

  return {
    props: {
      product,
    },
  };
};
