import React from 'react'
import styled from "styled-components";

const CertificationContainer = styled.li`
  width: 100%;  
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  border-bottom: 1px solid lightgrey;
  img {
    margin-right: 8px;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  span {
    font-weight: 300;
    font-size: 0.85rem;
  }
`;

const Title = styled.h4`
  font-weight: bold;
  positive: relative;
  margin-top: -5px
`;

const Button = styled.a`
  text-decoration: none;
  padding: 4px 16px;
  border: 1px solid;
  border-radius: 20px;
  width: fit-content;
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 0.9rem;
`;

const CertificationItem = ({title, issuer, date, link, logo}) => {
  return (
    <CertificationContainer>
      <div>
        <img width="48px" height="48px" src={logo} alt="issuer" />
      </div>
      <Stack>
        <Title>{title}</Title>
        <p>{issuer}</p>
        <span>Issued on {date}</span>
        <Button href={link} target='_blank'>Show credential</Button>
      </Stack>
    </CertificationContainer>
  )
}

export default CertificationItem