import { ContentNotFoundWrapper } from "./style";
import { GiOpenBook } from "react-icons/gi";
import { BsFillBasket2Fill } from "react-icons/bs";
import { TiWarningOutline } from "react-icons/ti";

const ContentNotFound = ({ type, name, description, ...props }) => {
  // render icon
  const handleRenderIcon = () => {
    switch (type) {
      case "product":
        return <BsFillBasket2Fill />;
      case "post":
        return <GiOpenBook />;
      case "notFound":
        return <TiWarningOutline />;
      default:
        return null;
    }
  };

  return (
    <ContentNotFoundWrapper
      className="wrapper flex-wrapper flex-center"
      {...props}
    >
      {handleRenderIcon()}
      {description ? (
        <p>{description}</p>
      ) : (
        <p>نتیجه ای برای {name} پیدا نشد !!!</p>
      )}
    </ContentNotFoundWrapper>
  );
};

export default ContentNotFound;
