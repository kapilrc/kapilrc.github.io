import Head from "next/head";
import { PROFILES } from "../constants/profiles";
import { SKILLS } from "../constants/skills";
import { WORK } from "../constants/work";
import {
  Container,
  Title,
  Header,
  Subtitle,
  Paragraph,
  SectionTitle,
  Skill,
  WorkSectionContainer,
  WorkTitle,
  WorkDescription,
  WorkExtra,
  ProfilesSectionContainer,
  ProfileItem,
} from "../styles/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kapil Choudhari: Full Stack Web Developer</title>
      </Head>
      <Container>
        <Header>
          <img
            src="/kapil-avatar.png"
            alt="kapilrc"
            width={180}
            height={180}
          />
          <Subtitle>Hey, I'm Kapil</Subtitle>
          <Title>
            I develop interactive <span className="accent-line">web-apps</span>{" "}
            at{" "}
            <a href="https://www.borngroup.com/" target="_blank">
              BORN
            </a>
          </Title>
          <Paragraph>
            I'm a <strong>JavaScript Enthusiast</strong>,{" "}
            <strong>Full Stack Web Developer developer</strong> <strong>& a hungry learner</strong>.
          </Paragraph>
        </Header>
        <section id="skills">
          <SectionTitle align="left">
            <span className="accent-line">Skills</span>
          </SectionTitle>
          <Skill>
            {
              SKILLS?.map(skill => <li key={skill}> {skill} </li>)
            }
          </Skill>
          
        </section>
        <section id="work">
          <SectionTitle align="left">
            <span className="accent-line">Work (WIP)</span>
          </SectionTitle>
          {WORK &&
            WORK.map((data) => {
              return (
                <WorkSectionContainer key={data.title + data.link}>
                  <WorkTitle>
                    <a href={data.link} target="_blank">
                      {data.title}
                    </a>
                    <span>
                      {/* <img
                        src="/right-arrow.png"
                        width={18}
                        height={18}
                        alt="external-link"
                      /> */}
                    </span>
                  </WorkTitle>
                  <WorkDescription>{data.description}</WorkDescription>
                  <WorkExtra>{data.extra}</WorkExtra>
                </WorkSectionContainer>
              );
            })}
        </section>
        <section id="profiles">
          <SectionTitle>
            <span className="accent-line">Online Presence</span>
          </SectionTitle>
          <ProfilesSectionContainer>
            {PROFILES &&
              PROFILES.map((profile) => {
                return (
                  <ProfileItem key={profile.title + profile.link}>
                    <a href={profile.link} target="_blank">
                      {profile.title}
                    </a>
                  </ProfileItem>
                );
              })}
          </ProfilesSectionContainer>
        </section>
      </Container>
    </>
  );
}
