import { InfoCard } from "./style";
import GridWrapper from "../../grid-wrapper";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";

const InfoSection = () => {
  return (
    <section className="container flex-wrapper flex-center space-top">
      <GridWrapper gap="3em" className="wrapper">
        <InfoCard data-aos="fade-left">
          <HiOutlineLocationMarker />
          <h4 className="info-card__title">آدرس ما</h4>
          <div className="info-card-body">
            <a
              href="https://www.google.com/maps/place/Tehran+Province,+Tehran,+Etemadian+St,+Iran/@35.7220603,51.3280513,21z/data=!4m13!1m7!3m6!1s0x3f8dfdead539573b:0xbcac1e3ca0b92d93!2sTehran+Province,+Tehran,+Etemadian+St,+Iran!3b1!8m2!3d35.7221113!4d51.3283193!3m4!1s0x3f8dfdead539573b:0xbcac1e3ca0b92d93!8m2!3d35.7221113!4d51.3283193"
              className="card-body__text"
            >
              فلکه دوم صادقیه خیابان ولیعصر - خیابان اعتمادیان پلاک 36 واحد 2
            </a>
          </div>
        </InfoCard>
        <InfoCard data-aos="fade-up">
          <HiOutlineMail />
          <h4 className="info-card__title">آدرس ایمیل ما</h4>
          <div className="info-card-body latin">
            <a href="mailto:info@didebansanat.ir" className="card-body__text">
              info@didebansanat.ir
            </a>
          </div>
        </InfoCard>
        <InfoCard data-aos="fade-right">
          <FiHeadphones />
          <h4 className="info-card__title">شماره های تماس</h4>
          <div className="info-card-body latin">
            <h5 className="card-body__text">44014168</h5>
            <h5 className="card-body__text">44969437</h5>
            <h5 className="card-body__text">44965734</h5>
          </div>
        </InfoCard>
      </GridWrapper>
    </section>
  );
};

export default InfoSection;
