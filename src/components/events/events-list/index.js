import { useState, useEffect } from "react";
import { BlogListContainer } from "./style";
import GridWrapper from "../../../components/grid-wrapper";
import SectionTitle from "../../section-title";
import CategoryFilter from "../../category-filter";
import EventsCard from "../events-card";
import Pagination from "../../pagination";
import ContentNotFound from "../../content-not-found";
import funcReplaceAll from "../../../helper/funcReplaceAll";
import useGetHashUrl from "../../../hooks/useGetHashUrl";

const EventsList = ({ categories, posts }) => {
  // paginate states
  const [currentPage, setCurrentPage] = useState(1);
  // filter states
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // use get hash url hook
  const { pathname, hashUrl } = useGetHashUrl();

  // filter data
  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) => {
        if (funcReplaceAll(post.category.name, " ", "-") === hashUrl)
          return true;
        if (hashUrl === pathname) return posts;
      })
    );
  }, [hashUrl, pathname, posts]);

  // pagination blog
  const lastPostIndex = currentPage * 6;
  const firstPostIndex = lastPostIndex - 6;
  const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);

  return (
    <BlogListContainer className="container space-top flex-wrapper flex-center">
      <SectionTitle subTitle="رویداد ها" title="رویدادهای دیده بان صنعت" />
      <>
        <CategoryFilter data={categories} />

        <GridWrapper size="26rem" gap="3em" mgTop="4em" className="wrapper">
          {currentPosts.map((item) => (
            <EventsCard data={item} key={item.id} />
          ))}
        </GridWrapper>

        {!currentPosts.length > 0 ? (
          <ContentNotFound type="post" name="دسته بندی مورد نظر" />
        ) : (
          <Pagination
            postPerPage={6}
            totalPosts={filteredPosts.length}
            currentPage={currentPage}
            changePage={setCurrentPage}
          />
        )}
      </>
    </BlogListContainer>
  );
};

export default EventsList;
