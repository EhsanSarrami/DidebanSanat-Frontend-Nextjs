import React from "react";
import Image from "next/image";
import { SplitSectionWrapper, SplitSectionContent } from "./SplitSectionStyle";

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
            width={500}
            height={320}
            layout="responsive"
            priority
          />
        </div>
      </SplitSectionWrapper>
    </div>
  );
};

export default SplitSection;
