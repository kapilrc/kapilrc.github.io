import React from 'react'
import { WorkDescription, WorkExtra, WorkResponsibilities, WorkSectionContainer, WorkTitle } from '../styles'

const WorkSection = ({title, link, extra, description, responsibilites}) => {
  return (
    <WorkSectionContainer key={title + link}>
      <WorkTitle>
        Project: <a href={link} target="_blank">
          {title}
        </a>
        {/* <span>
    <img
      src="/right-arrow.png"
      width={18}
      height={18}
      alt="external-link"
    />
  </span> */}
      </WorkTitle>
      <WorkDescription>{description}</WorkDescription>
      <WorkExtra>{extra}</WorkExtra>
      <WorkResponsibilities>
        {
          responsibilites?.map(r => <li key={r} dangerouslySetInnerHTML={{ __html: r }} />)
        }
      </WorkResponsibilities>
    </WorkSectionContainer>
  )
}

export default WorkSection