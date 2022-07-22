import a from 'color-alpha'
import type { Component, JSX } from 'solid-js'
import { styled } from 'solid-styled-components'

import { CommonLayout } from './common'

const Container = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1 {
    border-bottom: solid 2px ${(p) => a(p.theme?.colors.sasadark || '', 0.5)};
    margin: 1rem 0;
    font-size: 1.5rem;
    ${(p) => p.theme?.media.breakpoints.md} {
      font-size: 2.5rem;
    }
  }

  h2 {
    border-bottom: solid 1px ${(p) => a(p.theme?.colors.sasadark || '', 0.5)};
    margin: 1rem 0;
    font-size: 1.25rem;
    ${(p) => p.theme?.media.breakpoints.md} {
      font-size: 1.75rem;
    }
  }

  h3 {
    margin: 0.5 0;
    font-size: 1.25rem;
  }

  h4 {
    margin: 0.5 0;
    font-size: 1.15rem;
  }

  h5 {
    margin: 0.25rem 0;
    font-size: 1rem;
  }

  h6 {
    margin: 0.25rem 0;
    font-size: 0.8rem;
  }

  p {
    margin: 0.25rem 0;
    font-weight: 600;
  }

  ul,
  ol {
    padding-left: 2rem;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    padding: 2rem;
    border-left: ${(p) => p.theme?.colors.sasadark} 2px;
  }

  a {
    color: blue;

    &:hover {
      border-bottom: solid blue 1px;
    }
  }

  img {
    margin-bottom: 2rem;
  }

  table {
    margin-bottom: 2rem;
  }

  thead {
    background-color: ${(p) => a(p.theme?.colors.sasadark || '', 0.75)};
    color: ${(p) => p.theme?.colors.text};
  }

  tbody {
    background-color: ${(p) => p.theme?.colors.dango};
  }

  tr {
    border-top: ${(p) => p.theme?.colors.sasadark} 2px;
  }

  th,
  td {
    padding: 1rem;
  }
`

export const ArticleLayout: Component<{
  children: JSX.Element
}> = (props) => {
  return (
    <CommonLayout>
      <Container>{props.children}</Container>
    </CommonLayout>
  )
}
