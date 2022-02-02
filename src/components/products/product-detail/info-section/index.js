import { useState } from "react";
import {
  InfoSectionWrapper,
  InfoSectionTab,
  InfoSectionTabItem,
  InfoSectionCol,
} from "./style";
import DateConvertor from "../../../../helper/funcConvertDate";
import StyledLink from "../../../../core-ui/styled-link";

const TabItems = ["مشخصات", "مشخصات فنی", "توضیحات", "دانلود دیتاشیت"];

const InfoSection = ({ data }) => {
  const {
    title,
    updated,
    productModel,
    tecnicalDescription,
    longDescription,
    datasheat,
  } = data;

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
      </InfoSectionTab>
      <InfoSectionCol data-aos="fade-up">
        {currentTab === "مشخصات" ? (
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
        ) : currentTab === "مشخصات فنی" ? (
          <div
            className="info-section-fetures"
            dangerouslySetInnerHTML={{ __html: tecnicalDescription }}
          />
        ) : currentTab === "توضیحات" ? (
          <div
            className="info-section-desc"
            dangerouslySetInnerHTML={{ __html: longDescription }}
          />
        ) : (
          <div>
            <StyledLink
              space="0.8em 2.5em"
              isBtn={true}
              href={`https://api.didebansanat.com/media/${datasheat}`}
              target="_blank"
              isAnchor={true}
            >
              دریافت فایل
            </StyledLink>
          </div>
        )}
      </InfoSectionCol>
    </InfoSectionWrapper>
  );
};

export default InfoSection;
