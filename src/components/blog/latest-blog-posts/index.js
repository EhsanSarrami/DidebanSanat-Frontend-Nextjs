import React from "react";
import { LatestBlogPostsContainer, LatestBlogPostsWrapper } from "./style";
import SectionTitle from "../../section-title";
import SectionTitleData from "../../../json/section-title/LatestBlogPosts.json";
import BlogCard from "../blog-card";

const LatestBlogPosts = ({ data }) => {
  return (
    <LatestBlogPostsContainer className="container flex-wrapper flex-center">
      <SectionTitle {...SectionTitleData} />
      <LatestBlogPostsWrapper className="wrapper" data-aos="fade-up">
        {data.slice(0, 3).map((item) => (
          <BlogCard data={item} key={item.id} />
        ))}
      </LatestBlogPostsWrapper>
    </LatestBlogPostsContainer>
  );
};

export default LatestBlogPosts;
