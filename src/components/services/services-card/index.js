import { ServiceCardWrapper } from "./style";
import Image from "next/image";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcBlurDataUrl from "../../../helper/funcBlurDataUrl";

const ServicesCard = ({ data }) => {
  // destructure data
  const { image, title, shortDescription, longDescription } = data;

  return (
    <ServiceCardWrapper
      affterContent={shortDescription}
      data-aos="zoom-in-down"
    >
      <h3 className="service-card__title">{title}</h3>
      <div
        className="service-card__description"
        dangerouslySetInnerHTML={{
          __html: `<p>${longDescription}</p>`,
        }}
      />
      <div className="service-card__image">
        {image && (
          <Image
            src={image}
            loader={funcImageLoader}
            alt={title}
            layout="intrinsic"
            width={256}
            height={159}
            quality={50}
            placeholder="blur"
            blurDataURL={funcBlurDataUrl()}
          />
        )}
      </div>
    </ServiceCardWrapper>
  );
};

export default ServicesCard;
