import React from "react";
import Axios from "../../../src/services/AxiosConfig";
import { GET_EVENT_POST } from "../../../src/graphql";
import PagesHeader from "../../../src/components/pages-header";
import LocationData from "../../../src/json/location-data/Events.json";
import funcLocationGenerator from "../../../src/helper/funcLocationGenerator";
import EventsDetailWrapper from "../../../src/components/events/events-detail";

const EventsDetail = ({ event }) => {
  // destructure BlogPost
  const { title, image } = event;

  return (
    <>
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
