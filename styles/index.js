import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 32px 20%;
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
  .accent-line {
    background-image: url("./text-highlight.png");
    background-position: 50% 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #github-social-container {
    margin: 8px 0;
  }
  @media (max-width: 480px) {
    padding: 64px 16px;
  }
  .sub-title {
    font-size: 32px;
    font-weight: normal;
  }
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 48px;
  font-size: 64px;
  line-height: 1.05;
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
  @media (max-width: 480px) {
    font-size: 56px;
    line-height: 1.05;
  }
`;
export const Subtitle = styled.h3`
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-size: 28px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.03em;
  margin: 16px 0;
`;
export const Paragraph = styled.p`
  text-align: center;
  max-width: 540px;
  margin-bottom: 48px;
  font-size: 24px;
  line-height: 1.4;
`;

export const SectionTitle = styled.h3`
  font-size: 32px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.03em;
`;
export const WorkSectionContainer = styled.section`
  margin-top: 32px;
  margin-bottom: 64px;
`;

export const Skill = styled.div`
  display: flex;
  list-style: none;
  margin-block: 20px 30px;
  display: flex;
  flex-wrap: wrap;

  > li {
    padding: 6px 15px;
    background: ${({ theme }) => theme.colors.royalblue};
    margin: 10px 10px 10px 0;
    text-align: center;
    border-radius: 5px;
    color: white;
  }
`;

export const Highlights = styled.ul`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const WorkTitle = styled.h4`
  margin-top: 0px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  letter-spacing: -0.025em;
  a {
    color: ${({ theme }) => theme.colors.fg};
    text-decoration: none;
    margin-right: 8px;
  }
  a :hover {
    text-decoration: underline;
  }
`;

export const WorkDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-bottom: 16px;
`;

export const WorkExtra = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
  color: #575c67;
`;

export const WorkResponsibilities = styled.ul`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const ProfilesSectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
`;

export const ProfileItem = styled(WorkTitle)`
  width: 200px;
  a {
    color: ${(props) => props.theme.colors.blue} !important;
  }
  @media (max-width: 480px) {
    width: auto;
    margin-right: 16px;
  }
`;
