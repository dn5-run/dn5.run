import { Link } from 'solid-app-router'
import { For } from 'solid-js'
import { css, styled, useTheme } from 'solid-styled-components'

import Logo from '~/assets/svg/logo.svg'
import { LandingHeader } from '~/components/landing-header'

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;

  ${(p) => p.theme?.media.breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
`

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
  margin-left: 1rem;
  gap: 2rem;

  ${(p) => p.theme?.media.breakpoints.md} {
    margin-right: 0;
    margin-left: 10rem;
  }

  div:first-child {
    h3 {
      color: ${(p) => p.theme?.colors.sasadark};
    }

    h1 {
      margin-top: 2rem;
      font-size: 2.5rem;

      ${(p) => p.theme?.media.breakpoints.md} {
        font-size: 4rem;
      }
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${(p) => p.theme?.media.breakpoints.md} {
      flex-direction: row;
    }

    a {
      padding: 0.5rem 1.5rem;
      border-radius: 1rem;
      color: white;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`

const LandingImage = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  margin-right: 10rem;

  ${(p) => p.theme?.media.breakpoints.md} {
    display: flex;
  }

  svg {
    height: 550px;
    filter: drop-shadow(${(p) => p.theme?.colors.text} 0 0 5px);
  }
`

const Index = () => {
  const theme = useTheme()
  return (
    <Container>
      <LandingHeader />
      <Landing>
        <div>
          <h3>Done!! Go!!</h3>
          <h1>だんご、走る！！</h1>
        </div>
        <p>もっちりと色々作ったり運営したりしています。とっても、もっちりと。</p>
        <div>
          <For
            each={
              [
                ['/applications', 'Applications', theme.colors.sasadark],
                ['/services', 'Services', theme.colors.sasadark],
                ['/discord', 'Discord', 'rgb(88, 101, 242)'],
              ] as const
            }
          >
            {(value) => (
              <Link
                href={value[0]}
                class={css`
                  background-color: ${value[2]};
                `}
              >
                {value[1]}
              </Link>
            )}
          </For>
        </div>
      </Landing>
      <LandingImage>
        <Logo />
      </LandingImage>
    </Container>
  )
}

export default Index
