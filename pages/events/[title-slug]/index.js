import React from "react";
import Axios from "../../../src/services/AxiosConfig";
import { GET_EVENT_POST } from "../../../src/graphql";
import PagesHeader from "../../../src/components/pages-header";
import LocationData from "../../../src/json/location-data/Events.json";
import funcLocationGenerator from "../../../src/helper/funcLocationGenerator";
import EventsDetailWrapper from "../../../src/components/events/events-detail";
import CostomHead from "../../../src/components/custom-head";

const EventsDetail = ({ event }) => {
  // destructure BlogPost
  const { title, image, metaTitle, metaDescription, metaKeywords } = event;

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
      <EventsDetailWrapper data={event} />
    </>
  );
};

export default EventsDetail;

export const getServerSideProps = async (context) => {
  // get event post
  const {
    data: {
      data: { event },
    },
  } = await Axios(GET_EVENT_POST, { id: context.query.id });

  return {
    props: {
      event,
    },
  };
};
