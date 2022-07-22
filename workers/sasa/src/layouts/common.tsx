import type { Component, JSX } from 'solid-js'
import { styled } from 'solid-styled-components'
const Container = styled.div`
  margin: 0 0.5rem;
  ${(p) => p.theme?.media.breakpoints.md} {
    margin: 0 24rem;
  }
`

export const CommonLayout: Component<{
  children: JSX.Element
}> = (props) => {
  return (
    <>
      <Container>{props.children}</Container>
    </>
  )
}
