import { CallToActionTwoContainer, CallToActionTwoWrapper } from "./style";
import Link from "next/link";
import StyledLink from "../../../core-ui/styled-link";
import CallToActionData from "../../../json/call-to-action/FooterCallToAction.json";

const CallToActionTwo = () => {
  // destructure data
  const { description, btn_link, btn_text } = CallToActionData;

  return (
    <CallToActionTwoContainer className="container flex-wrapper flex-center space-top">
      <CallToActionTwoWrapper className="wrapper flex-wrapper">
        <div>
          {true ? (
            <StyledLink
              className="call-to-action-two__body"
              href="/"
              data-aos="fade-left"
            >
              <img src="/image/DidebanLogoDark.png" alt="dideban sanat" />
            </StyledLink>
          ) : (
            <StyledLink
              className="call-to-action-two__body"
              href="/"
              data-aos="fade-left"
            >
              <img src="/image/DidebanLogo.png" alt="dideban sanat" />
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
