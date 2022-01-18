import React from "react";
import Image from "next/image";
import { SplitSectionWrapper, SplitSectionContent } from "./SplitSectionStyle";
import funcBlurDataUrl from "../../helper/funcBlurDataUrl";

const SplitSection = ({ data }) => {
  const { image, title, description } = data;

  return (
    <div className="container space-top flex-wrapper flex-center">
      <SplitSectionWrapper
        className="wrapper flex-wrapper"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <SplitSectionContent>
          <h4>{title}</h4>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </SplitSectionContent>

        <div className="split-section-image">
          <Image
            src={`/image/SplitSection/${image}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={60}
            placeholder="blur"
            blurDataURL={funcBlurDataUrl()}
          />
        </div>

      </SplitSectionWrapper>
    </div>
  );
};

export default SplitSection;
