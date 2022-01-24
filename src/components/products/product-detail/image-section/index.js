import { useState } from "react";
import { ImageSectionWrapper } from "./style";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import funcImageLoader from "../../../../helper/funcImageLoader";
import funcBlurDataUrl from "../../../../helper/funcBlurDataUrl";

const ImageSection = ({ data: { productGallery, image, altImage } }) => {
  const [current, setCurrent] = useState(0);

  return (
    <ImageSectionWrapper>
      <div className="image-section__current-image flex-wrapper flex-center">
        <TransformWrapper>
          <TransformComponent>
            {current === 0 ? (
              <Image
                src={image}
                loader={funcImageLoader}
                alt={altImage}
                layout="fill"
                objectFit="cover"
                quality={60}
                data-aos="fade-up"
                placeholder="blur"
                blurDataURL={funcBlurDataUrl()}
              />
            ) : (
              productGallery.map(({ image, altImage, id }) => {
                if (id === current)
                  return (
                    <Image
                      src={image}
                      loader={funcImageLoader}
                      alt={altImage}
                      key={id}
                      layout="fill"
                      objectFit="cover"
                      quality={60}
                      data-aos="fade-up"
                      placeholder="blur"
                      blurDataURL={funcBlurDataUrl()}
                    />
                  );

                return null;
              })
            )}
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div className="image-section-grid">
        <div className="image-section-grid__img">
          <Image
            src={image}
            loader={funcImageLoader}
            alt={altImage}
            layout="fill"
            objectFit="cover"
            quality={60}
            onClick={() => setCurrent(0)}
            placeholder="blur"
            blurDataURL={funcBlurDataUrl()}
          />
        </div>
        {productGallery.map(({ image, altImage, id }) => (
          <div className="image-section-grid__img" key={id}>
            <Image
              src={image}
              loader={funcImageLoader}
              key={id}
              alt={altImage}
              layout="fill"
              objectFit="cover"
              quality={60}
              onClick={() => setCurrent(id)}
              placeholder="blur"
              blurDataURL={funcBlurDataUrl()}
            />
          </div>
        ))}
      </div>
    </ImageSectionWrapper>
  );
};

export default ImageSection;
