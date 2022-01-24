import { EventsCardWrapper } from "./style";
import Image from "next/image";
import funcConvertDate from "../../../helper/funcConvertDate";
import StyledLink from "../../../core-ui/styled-link";
import funcReplaceAll from "../../../helper/funcReplaceAll";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcBlurDataUrl from "../../../helper/funcBlurDataUrl";

const EventsCard = ({ data }) => {
  const { title, author, publish, category, image, altImage, slug, id } = data;

  return (
    <EventsCardWrapper>
      <StyledLink
        className="events-card-image"
        href={`/events/${funcReplaceAll(title, " ", "-")}-${slug}?id=${id}`}
        notRound={true}
      >
        <Image
          src={image}
          loader={funcImageLoader}
          alt={altImage}
          layout="fill"
          objectFit="cover"
          quality={60}
          placeholder="blur"
          blurDataURL={funcBlurDataUrl()}
        />
      </StyledLink>
      <div className="events-card-content">
        <StyledLink
          className="events-card__title"
          href={`/events/${funcReplaceAll(title, " ", "-")}-${slug}?id=${id}`}
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
