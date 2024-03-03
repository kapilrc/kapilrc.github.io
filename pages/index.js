import Head from "next/head";
import { PROFILES } from "../constants/profiles";
import { SKILLS } from "../constants/skills";
import { WORK } from "../constants/work";
import { HIGHLIGHTS } from "../constants/highlights";
import { CERTIFICATIONS } from "../constants/certifications";
import {
  Container,
  Title,
  Header,
  Subtitle,
  Paragraph,
  SectionTitle,
  Skill,
  Highlights,
  WorkResponsibilities,
  WorkSectionContainer,
  WorkTitle,
  WorkDescription,
  WorkExtra,
  ProfilesSectionContainer,
  ProfileItem,
  FloatContainer,
  ServiceSection,
  Certifications,
} from "../styles/index";
import WorkSection from "../components/WorkSection";
import React from "react";
import CertificationItem from "../components/CertificationItem";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kapil Choudhari: Full Stack Developer</title>
      </Head>
      <Container>
        <Header>
          <img
            src="/kapil-avatar.png"
            alt="kapilrc"
            width={180}
            height={180}
          />
          <Subtitle>Hey<span>&#128075;</span>, I'm Kapil</Subtitle>
          <Title>
            I build interactive <br /><span className="accent-line">web-apps</span> at {" "}
            <FloatContainer>
              <a href="https://www.borngroup.com/" target="_blank">
                <img src="/born-logo.svg" width={111} height={45} />
              </a>
            </FloatContainer>
          </Title>
          <Paragraph>
            I'm a <strong>JavaScript Enthusiast</strong>,{" "}
            <strong>Full Stack Web Developer</strong> <strong>& a hungry learner</strong>.
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
        <section id="highlights">
          <SectionTitle align="left">
            <span className="accent-line">Highlights/ Summary of my current role</span>
          </SectionTitle>
          <Highlights>
            {
              HIGHLIGHTS?.map(r => <li key={r} dangerouslySetInnerHTML={{ __html: r }} />)
            }
          </Highlights>
        </section>
        <section id="work">
          <SectionTitle align="left">
            <span className="accent-line">Employment</span>
          </SectionTitle>
          {WORK &&
            WORK.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <ServiceSection>
                    <h2>{data?.company},</h2>
                    <h3>{data?.position}</h3>
                    <div style={{ flexGrow: 1 }}></div>
                    <p>({data?.duration})</p>
                  </ServiceSection>
                  {
                    data.projects?.map((p, index) => (
                      <WorkSection key={index} {...p} />
                    ))
                  }
                </React.Fragment>
              )
            })}
        </section>

        <section id="certifications">
          <SectionTitle align="left">
            <span className="accent-line">Licenses &amp; certifications</span>
          </SectionTitle>
          <Certifications>
            {
              CERTIFICATIONS?.map(c => <CertificationItem key={c.id} {...c} />)
            }
          </Certifications>
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
                    <div>
                      <img width="22px" height="22px" src={profile.logo} alt={profile.title} />
                    </div>
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
