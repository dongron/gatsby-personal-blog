import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PhotoPost = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  
`

const PhotoCard = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <PhotoPost featured={props.featured}>
    </PhotoPost>
  )
}

export default PhotoCard
