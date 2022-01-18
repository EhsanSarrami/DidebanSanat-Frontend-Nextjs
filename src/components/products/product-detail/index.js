import { ProductDetailContainer, ProductDetailWrapper } from "./style";
import ImageSection from "./image-section";
import InfoSection from "./info-section";

const ProductDetail = ({ data }) => {
  // destructure data
  const { title, productGallery, image, altImage } = data;

  return (
    <ProductDetailContainer className="container space-top flex-wrapper flex-center">
      <ProductDetailWrapper className="wrapper flex-wrapper flex-center">
        <h3 className="product-name">{title}</h3>
        <ImageSection data={{ productGallery, image, altImage }} />
        <InfoSection data={data} />
      </ProductDetailWrapper>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
