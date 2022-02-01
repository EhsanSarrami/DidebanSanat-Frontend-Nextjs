import React from "react";
import { SearchResultCardWrapper } from "./style";
import Image from "next/image";
import {
  funcImageLoader,
  funcBlurDataUrl,
  funcReplaceAll,
} from "../../../../helper";
import StyledLink from "../../../../core-ui/styled-link";

const SearchResultCard = ({ data, closeSearchbar }) => {
  // destructure data
  const {
    id,
    image,
    altImage,
    slug,
    title,
    productModel,
    productParentCategory: { name: parentName, slug: parentSlug },
    productFirstSubCategory: { name: subName },
  } = data;

  // declare href link
  const productLink = `/products-categories/${parentSlug}/${funcReplaceAll(
    subName,
    " ",
    "-"
  )}/${slug}-${funcReplaceAll(title, " ", "-")}?id=${id}`;

  return (
    <StyledLink href={productLink} onClick={closeSearchbar}>
      <SearchResultCardWrapper>
        <div className="search-results-card__image">
          <Image
            src={image}
            loader={funcImageLoader}
            alt={altImage}
            layout="fill"
            objectFit="cover"
            quality={60}
            placeholder="blur"
            blurDataURL={funcBlurDataUrl()}
          />
        </div>
        <div className="search-results-card_info">
          <h4>{title}</h4>
          <h5>{`مدل : ${productModel}`}</h5>
          <h5>{`دسته بندی : ${parentName}`}</h5>
        </div>
      </SearchResultCardWrapper>
    </StyledLink>
  );
};

export default SearchResultCard;
