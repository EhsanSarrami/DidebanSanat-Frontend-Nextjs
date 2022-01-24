import PagesHeader from "../../src/components/pages-header";
import LocationData from "../../src/json/location-data/Events.json";
import EventsList from "../../src/components/events/events-list";
import { GET_EVENTS_DATA } from "../../src/graphql";
import Axios from "../../src/services/AxiosConfig";
import CostomHead from "../../src/components/custom-head";
import { EventsHead } from "../../src/json/heades";

const Events = ({ eventCategories, events }) => {
  return (
    <>
      <CostomHead data={EventsHead} />
      <PagesHeader
        title="رویدادهای دیده بان صنعت"
        locationList={LocationData}
        staticBg="pic3.jpg"
      />
      <EventsList posts={events} categories={eventCategories} />
    </>
  );
};

export default Events;

export const getServerSideProps = async () => {
  // get blog list posts with categories
  const {
    data: {
      data: { eventCategories, events },
    },
  } = await Axios(GET_EVENTS_DATA);

  return {
    props: {
      eventCategories,
      events,
    },
  };
};
