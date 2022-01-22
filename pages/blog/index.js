import PagesHeader from "../../src/components/pages-header";
import LocationData from "../../src/json/location-data/Blog.json";
import BlogList from "../../src/components/blog/blog-list";
import Axios from "../../src/services/AxiosConfig";
import { GET_BLOG_LIST } from "../../src/graphql";
import CostomHead from "../../src/components/custom-head";
import { BlogHead } from "../../src/json/heades";

const Blog = ({ BlogPostCategories, BlogPosts }) => {
  return (
    <>
      <CostomHead data={BlogHead} />
      <PagesHeader
        title="وبلاگ دیده بان صنعت"
        locationList={LocationData}
        staticBg="pic2.jpg"
      />
      <BlogList posts={BlogPosts} categories={BlogPostCategories} />
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  // get blog list posts with categories
  const {
    data: {
      data: { BlogPostCategories, BlogPosts },
    },
  } = await Axios(GET_BLOG_LIST);

  return {
    props: {
      BlogPostCategories,
      BlogPosts,
    },
  };
};
