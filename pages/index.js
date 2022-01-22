import Axios from "../src/services/AxiosConfig";
import {
  GET_PRODUCTS_CATEGORIES_LIST,
  GET_LATEST_BLOG,
  GET_BRANDS,
} from "../src/graphql";
import HomeSection from "../src/components/home-section";
import SplitSection from "../src/components/split-section";
import AboutSplitSection from "../src/json/split-section/About.json";
import ProductsCategoriesList from "../src/components/product-categories-grid";
import CallToActionOne from "../src/components/call-to-actions/call-to-action-one";
import CallToActionOneData from "../src/json/call-to-action/Home.json";
import LatestBlogPosts from "../src/components/blog/latest-blog-posts";
import SectionTitle from "../src/components/section-title";
import BrandsSectionTitle from "../src/json/section-title/Brands.json";
import SlickSlider from "../src/components/slick-slider";
import BrandSlide from "../src/components/brand-slide";
import BrandsSliderSetting from "../src/json/slider-settings/brands.json";
import CustomHead from "../src/components/custom-head";
import { HomeHeads } from "../src/json/heades";

const Home = ({ parentCategories, latestBlogPosts, brands }) => {
  return (
    <>
      <CustomHead data={HomeHeads} />
      <HomeSection />
      <SplitSection data={AboutSplitSection} />
      <ProductsCategoriesList productCategories={parentCategories} />
      <CallToActionOne data={CallToActionOneData} />
      <LatestBlogPosts data={latestBlogPosts} />
      <SectionTitle {...BrandsSectionTitle} />
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

export default Home;

export const getServerSideProps = async () => {
  // get products categories
  const {
    data: {
      data: { parentCategories },
    },
  } = await Axios(GET_PRODUCTS_CATEGORIES_LIST);

  // get latest blog posts
  const {
    data: {
      data: { BlogPosts },
    },
  } = await Axios(GET_LATEST_BLOG);

  // get brands
  const {
    data: {
      data: { brands },
    },
  } = await Axios(GET_BRANDS);

  return {
    props: {
      parentCategories,
      latestBlogPosts: BlogPosts,
      brands,
    },
  };
};
