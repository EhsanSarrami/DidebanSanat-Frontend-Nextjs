import styled from "styled-components";

export const SectionTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.spacTop && "7.5em"};
  margin-bottom: ${(props) => props.spacBottom && "7.5em"};
`;

export const SectionTitleSubtitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;

export const SectionTitleTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;
`;

export const SectionTitleDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.textSecoundary};
  text-align: center;
  margin-top: 0.4em;
`;
