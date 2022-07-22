import { styled } from 'solid-styled-components'

import Icon from '~/assets/images/icon.svg'

const Container = styled.nav`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${(p) => p.theme?.colors.sasadark};

  & > div:last-child {
    a {
      padding: 0.5rem;
      border-radius: 0.25rem;
      color: white;
      color: #fff;
      font-size: 1.25rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${(p) => p.theme?.colors.sasadark};
      }
    }
  }
`

export const Header = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <Icon width={50} height={50} />
        </a>
      </div>
      <div />
    </Container>
  )
}
