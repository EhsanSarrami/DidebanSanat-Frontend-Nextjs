import { ServicesContainer } from "./style";
import GridWrapper from "../../grid-wrapper";
import ServicesCard from "../services-card";

const ServicesList = ({ data }) => {
  return (
    <ServicesContainer className="container flex-wrapper flex-center">
      <GridWrapper className="wrapper" gap="3em" mgTop="4em">
        {data.map((item) => (
          <ServicesCard key={item.id} data={item} />
        ))}
      </GridWrapper>
    </ServicesContainer>
  );
};

export default ServicesList;
