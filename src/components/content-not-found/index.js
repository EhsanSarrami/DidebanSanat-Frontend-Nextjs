import { ContentNotFoundWrapper } from "./style";
import { GiOpenBook } from "react-icons/gi";
import { BsFillBasket2Fill } from "react-icons/bs";

const ContentNotFound = ({ type, name }) => {

    // render icon
    const handleRenderIcon = () => {
        switch (type) {
            case "product":
                return <BsFillBasket2Fill />
            case "post":
                return <GiOpenBook />
            default:
                return null
        }
    }

    return (
        <ContentNotFoundWrapper className="wrapper flex-wrapper flex-center">
            {handleRenderIcon()}
            <p>نتیجه ای برای {name} پیدا نشد !!!</p>
        </ContentNotFoundWrapper>
    )
}

export default ContentNotFound
