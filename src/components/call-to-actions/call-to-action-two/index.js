import { useContext } from "react";
import { AppContext } from "../../../context";
import Image from "next/image";
import { CallToActionTwoContainer, CallToActionTwoWrapper } from "./style";
import StyledLink from "../../../core-ui/styled-link";
import CallToActionData from "../../../json/call-to-action/FooterCallToAction.json";

const CallToActionTwo = () => {
  // destructure data
  const { description, btn_link, btn_text } = CallToActionData;

  // use context
  const { darkTheme } = useContext(AppContext);

  return (
    <CallToActionTwoContainer className="container flex-wrapper flex-center space-top">
      <CallToActionTwoWrapper className="wrapper flex-wrapper">
        <div>
          {!darkTheme ? (
            <StyledLink
              className="call-to-action-two__body"
              href="/"
              data-aos="fade-left"
            >
              <Image
                src="/image/DidebanLogoDark.png"
                alt="dideban sanat"
                width={147}
                height={50}
              />
            </StyledLink>
          ) : (
            <StyledLink
              className="call-to-action-two__body"
              href="/"
              data-aos="fade-left"
            >
              <Image
                src="/image/DidebanLogo.png"
                alt="dideban sanat"
                width={147}
                height={50}
              />
            </StyledLink>
          )}

          <StyledLink
            className="call-to-action-two__body"
            href="/"
            data-aos="fade-left"
          >
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </StyledLink>
        </div>

        {btn_link && (
          <StyledLink
            href={btn_link}
            space="0.5em 1.2em"
            icon="true"
            data-aos="fade-right"
            isBtn={true}
          >
            {btn_text}
          </StyledLink>
        )}
      </CallToActionTwoWrapper>
    </CallToActionTwoContainer>
  );
};

export default CallToActionTwo;
