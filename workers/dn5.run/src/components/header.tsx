import { Link } from 'solid-app-router'
import { Component, For } from 'solid-js'
import { styled } from 'solid-styled-components'

import Logo from '../assets/svg/logo-white.svg'

const Container = styled.header`
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${(p) => p.theme?.colors.sasa};

  div:first-child {
    svg {
      height: 25px;
      filter: drop-shadow(rgba(0, 0, 0, 0.25) 0 0 4px);

      ${(p) => p.theme?.media.breakpoints.md} {
        height: 40px;
      }
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    ${(p) => p.theme?.media.breakpoints.md} {
      gap: 1rem;
    }

    a {
      padding: 0.25rem 0.5rem;
      background-color: ${(p) => p.theme?.colors.sasa};
      border-radius: 0.5rem;
      color: white;
      font-size: 1rem;

      &:hover {
        background: ${(p) => p.theme?.colors.sasadark};
      }

      ${(p) => p.theme?.media.breakpoints.md} {
        font-size: 1.25rem;
      }
    }
  }
`

export const Header: Component = () => {
  return (
    <Container>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        <For
          each={
            [
              ['/', 'Top'],
              ['/applications', 'Apps'],
              ['/services', 'Services'],
            ] as const
          }
        >
          {(value) => <Link href={value[0]}>{value[1]}</Link>}
        </For>
      </div>
    </Container>
  )
}
