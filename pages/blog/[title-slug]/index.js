import Axios from "../../../src/services/AxiosConfig";
import { GET_BLOG_POST } from "../../../src/graphql";
import PagesHeader from "../../../src/components/pages-header";
import LocationData from "../../../src/json/location-data/Blog.json";
import funcLocationGenerator from "../../../src/helper/funcLocationGenerator";
import BlogDetailWrapper from "../../../src/components/blog/blog-detail";
import CostomHead from "../../../src/components/custom-head";

const BlogDetail = ({ BlogPost }) => {
  // destructure BlogPost
  const { title, image, metaTitle, metaDescription, metaKeywords } = BlogPost;

  // head meta tags data
  const HeadData = {
    title: metaTitle,
    metas: [
      {
        id: 1,
        name: "description",
        content: metaDescription,
      },
      {
        id: 2,
        name: "robots",
        content: "index, follow",
      },
      {
        id: 3,
        name: "keywords",
        content: metaKeywords,
      },
      {
        id: 4,
        property: "og:site_name",
        content: "didebansanat",
      },
      {
        id: 5,
        property: "og:title",
        content: "didebansanat",
      },
      {
        id: 6,
        property: "og:title",
        content: "didebansanat",
      },
      {
        id: 7,
        property: "og:image",
        content: "/image/DidebanLogo.png",
      },
      {
        id: 8,
        property: "og:url",
        content: "https://didebansanat.com/",
      },
    ],
  };

  return (
    <>
      <CostomHead data={HeadData} />
      <PagesHeader
        title={title}
        locationList={funcLocationGenerator(LocationData, title)}
        DynamicBg={image}
      />
      <BlogDetailWrapper data={BlogPost} />
    </>
  );
};

export default BlogDetail;

export const getServerSideProps = async (context) => {
  // get blog post
  const {
    data: {
      data: { BlogPost },
    },
  } = await Axios(GET_BLOG_POST, { id: context.query.id });

  return {
    props: {
      BlogPost,
    },
  };
};
