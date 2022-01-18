import React from "react";
import { BlogDetailContainer } from "./style";
import Image from "next/image";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcConvertDate from "../../../helper/funcConvertDate";
import funcBlurDataUrl from "../../../helper/funcBlurDataUrl";

const BlogDetailWrapper = ({ data }) => {
  // destructure data
  const {
    title,
    image,
    altImage,
    publish,
    updated,
    author,
    category,
    shortDescription,
    longDescription,
  } = data;

  return (
    <article className="container space-top flex-wrapper flex-center">
      <BlogDetailContainer className="wrapper">
        <div className="blog-detail-image">
          <Image
            src={funcImageLoader(image)}
            alt={altImage}
            layout="fill"
            objectFit="cover"
            quality={60}
            data-aos="fade-up"
            placeholder="blur"
            blurDataURL={funcBlurDataUrl()}
          />
        </div>
        <div className="blog-detail-header" data-aos="fade-up">
          <h4>
            تاریخ انتشار : {funcConvertDate(publish, "fa", "D MMMM YYYY")}
          </h4>
          <h4>
            تاریخ بروزرسانی : {funcConvertDate(updated, "fa", "D MMMM YYYY")}
          </h4>
          <h4> نویسنده : {author}</h4>
          <h4> دسته بندی : {category.name}</h4>
        </div>

        <p className="blog-detail-title" data-aos="fade-up">
          {title}
        </p>

        <div
          className="blog-detail-body"
          dangerouslySetInnerHTML={{
            __html: shortDescription,
          }}
          data-aos="fade-up"
        />
        <div
          className="blog-detail-body"
          dangerouslySetInnerHTML={{
            __html: longDescription,
          }}
          data-aos="fade-up"
        />
      </BlogDetailContainer>
    </article>
  );
};

export default BlogDetailWrapper;
