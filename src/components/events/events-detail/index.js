import React from "react";
import { EventsDetailContainer } from "./style";
import Image from "next/image";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcConvertDate from "../../../helper/funcConvertDate";

const EventsDetailWrapper = ({ data }) => {
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
      <EventsDetailContainer className="wrapper">
        <div className="events-detail-image">
          <Image
            src={funcImageLoader(image)}
            alt={altImage}
            layout="fill"
            objectFit="cover"
            quality={60}
            data-aos="fade-up"
          />
        </div>
        <div className="events-detail-header" data-aos="fade-up">
          <h4>
            تاریخ انتشار : {funcConvertDate(publish, "fa", "D MMMM YYYY")}
          </h4>
          <h4>
            تاریخ بروزرسانی : {funcConvertDate(updated, "fa", "D MMMM YYYY")}
          </h4>
          <h4> نویسنده : {author}</h4>
          <h4> دسته بندی : {category.name}</h4>
        </div>

        <p className="event-detail-title" data-aos="fade-up">
          {title}
        </p>

        <div
          className="events-detail-body"
          dangerouslySetInnerHTML={{
            __html: shortDescription,
          }}
          data-aos="fade-up"
        />
        <div
          className="events-detail-body"
          dangerouslySetInnerHTML={{
            __html: longDescription,
          }}
          data-aos="fade-up"
        />
      </EventsDetailContainer>
    </article>
  );
};

export default EventsDetailWrapper;
