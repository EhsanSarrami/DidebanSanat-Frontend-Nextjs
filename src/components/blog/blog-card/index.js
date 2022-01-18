import React from "react";
import { BlogCardWrapper } from "./style";
import Image from "next/image";
import StyledLink from "../../../core-ui/styled-link";
import funcConvertDate from "../../../helper/funcConvertDate";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcReplaceAll from "../../../helper/funcReplaceAll";
import funcBlurDataUrl from "../../../helper/funcBlurDataUrl";

const BlogCard = ({ data }) => {
  const { title, author, publish, category, image, slug, id } = data;

  return (
    <BlogCardWrapper>
      <StyledLink
        className="blog-card-image"
        href={`/blog/${funcReplaceAll(title, " ", "-")}_${slug}?id=${id}`}
        notRound={true}
      >
        <Image
          src={funcImageLoader(image)}
          alt={title}
          width={500}
          height={300}
          layout="intrinsic"
          objectFit="cover"
          quality={60}
          placeholder="blur"
          blurDataURL={funcBlurDataUrl()}
        />
      </StyledLink>
      <div className="blog-card-content">
        <h5 className="blog-card__date">
          {funcConvertDate(publish, "fa", "D MMMM YYYY")} &nbsp; / &nbsp;
          {author}
        </h5>
        <StyledLink
          className="blog-card__title"
          href={`/blog/${funcReplaceAll(title, " ", "-")}_${slug}?id=${id}`}
        >
          {title}
        </StyledLink>
        <h5 className="blog-card__date">{category.name}</h5>
      </div>
    </BlogCardWrapper>
  );
};

export default BlogCard;
