import PagesHeader from "../src/components/pages-header";
import LocationData from "../src/json/location-data/About.json";
import SplitSection from "../src/components/split-section";
import SplitSectionData from "../src/json/split-section/About.json";
import SectionTitle from "../src/components/section-title";
import SectionTitleData from "../src/json/section-title/Brands.json";
import SlickSlider from "../src/components/slick-slider";
import BrandSlide from "../src/components/brand-slide";
import BrandsSliderSetting from "../src/json/slider-settings/brands.json";
import Axios from "../src/services/AxiosConfig";
import { GET_BRANDS } from "../src/graphql";
import CostomHead from "../src/components/custom-head";
import { AboutHead } from "../src/json/heades";

const About = ({ brands }) => {
  return (
    <>
      <CostomHead data={AboutHead} />
      <PagesHeader
        title="با دیده بان صنعت آشنا شوید"
        locationList={LocationData}
        staticBg="pic5.jpg"
      />
      <SplitSection data={SplitSectionData} />
      <SectionTitle {...SectionTitleData} />
      <SlickSlider
        Slide={BrandSlide}
        data={brands}
        settings={BrandsSliderSetting}
        mgTop="4em"
        mgBottom="5em"
      />
    </>
  );
};

export default About;

export const getServerSideProps = async () => {
  // get brands
  const {
    data: {
      data: { brands },
    },
  } = await Axios(GET_BRANDS);

  return {
    props: { brands },
  };
};
