import React from 'react'
import styled, { css } from 'styled-components'
require('prismjs/themes/prism.css')

const sectionSpacing = css`
  margin: 0 0 2em 0;
`

const headingStyles = css`
  font-weight: 600;
  line-height: 1.25;
  margin: 0 0 1rem 0;
  text-transform: capitalize;
`

const listItemStyles = css`
  list-style-position: outside;
  line-height: 1.5;
  margin-bottom: 0.5em;

  &:last-child {
    margin: 0;
  }
`

const Body = styled.div`
  margin: 0 auto;
  max-width: ${(props) =>
    props.$noMaxWidth ? 'none' : props.theme.sizes.maxWidthCentered};

  h1,
  h2,
  h3 {
    ${headingStyles}
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    ${sectionSpacing}
    line-height: 1.5;
  }

  a {
    transition: 0.2s;
    color: ${(props) => props.theme.colors.base};
    &:hover {
      color: ${(props) => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    ${sectionSpacing}
    padding-left: 1.5em;

    li {
      ${listItemStyles}
    }
  }

  ul {
    li {
      list-style: disc;
    }
  }

  ol {
    li {
      list-style: decimal;
    }
  }

  hr {
    border-style: solid;
    border-color: ${(props) => props.theme.colors.secondary};
    ${sectionSpacing}
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${(props) => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    ${sectionSpacing}
    border-radius: 2px;
    background: ${(props) => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PostBody = styled(Body)`
  h1 {
    margin-top: 1em;
  }
  h3 {
    color: #111134;
  }
  p {
    line-height: 1.25;
    margin: 0 0 0.5em 0;
  }
`

const PageBody = (props) => {
  return props && props.page ? (
    <PostBody
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
      {...props}
    />
  ) : (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
      {...props}
    />
  )
}

export default PageBody
