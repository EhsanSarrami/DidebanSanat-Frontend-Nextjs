import { useState } from "react";
import {
  InfoSectionWrapper,
  InfoSectionTab,
  InfoSectionTabItem,
  InfoSectionCol,
} from "./style";
import DateConvertor from "../../../../helper/funcConvertDate";
import Tecnical from "./tecnical";
import Description from "./description";

const TabItems = ["مشخصات", "مشخصات فنی", "توضیحات"];

const InfoSection = ({ data }) => {
  const {
    title,
    updated,
    productModel,
    tecnicalDescription,
    longDescription,
    datasheat,
  } = data;

  // current tab state
  const [currentTab, setCurrentTab] = useState(TabItems[0]);

  return (
    <InfoSectionWrapper>
      <InfoSectionTab data-aos="fade-up">
        {TabItems.map((item, index) => (
          <InfoSectionTabItem
            key={index}
            active={currentTab === item}
            onClick={() => setCurrentTab(item)}
          >
            {item}
          </InfoSectionTabItem>
        ))}
        <InfoSectionTabItem>
          {datasheat && (
            <a
              href={`https://api.didebansanat.com/media/${datasheat}`}
              target="_blank"
              active={currentTab === "دانلود دیتاشیت"}
            >
              دانلود دیتاشیت
            </a>
          )}
        </InfoSectionTabItem>
      </InfoSectionTab>
      <InfoSectionCol data-aos="fade-up">
        {currentTab === TabItems[0] ? (
          <div className="info-section-specifications">
            <div className="section-specifications__item">
              <label className="specifications-item__title">
                نام محصول &nbsp; :
              </label>
              <span className="specifications-item__content">{title}</span>
            </div>
            <div className="section-specifications__item">
              <label className="specifications-item__title">
                مدل محصول &nbsp; :
              </label>
              <span className="specifications-item__content">
                {productModel}
              </span>
            </div>
            <div className="section-specifications__item">
              <label className="specifications-item__title">
                آخرین بروزرسانی &nbsp; :
              </label>
              <span className="specifications-item__content">
                {DateConvertor(updated, "fa", "HH:mm:ss | YYYY-M-D")}
              </span>
            </div>
          </div>
        ) : currentTab === TabItems[1] ? (
          <Tecnical data={tecnicalDescription} />
        ) : (
          currentTab === TabItems[2] && <Description data={longDescription} />
        )}
      </InfoSectionCol>
    </InfoSectionWrapper>
  );
};

export default InfoSection;
