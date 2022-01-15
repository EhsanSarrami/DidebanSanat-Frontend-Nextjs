import { EventsCardWrapper } from "./style";
import Image from "next/image";
import funcConvertDate from "../../../Helper/funcConvertDate";
import StyledLink from "../../../core-ui/styled-link";
import funcImageLoader from "../../../helper/funcImageLoader";

const EventsCard = ({ data }) => {
  const { title, author, publish, category, image, altImage, slug, id } = data;

  return (
    <EventsCardWrapper>
      <StyledLink
        className="events-card-image"
        href={`/events/${slug}?id=${id}`}
      >
        <Image
          src={funcImageLoader(image)}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={60}
        />
      </StyledLink>
      <div className="events-card-content">
        <StyledLink
          className="events-card__title"
          href={`/events/${slug}?id=${id}`}
        >
          {title}
        </StyledLink>
        <h5 className="events-card__date">
          {funcConvertDate(publish, "fa", "D MMMM YYYY")} &nbsp; / &nbsp;
          {author}
        </h5>
        <h5 className="events-card__date">{category.name}</h5>
      </div>
    </EventsCardWrapper>
  );
};

export default EventsCard;
