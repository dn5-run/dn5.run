import { Link } from 'solid-app-router'
import { For } from 'solid-js'
import { styled } from 'solid-styled-components'

import Logo from '../assets/svg/logo.svg'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  padding: 2.5rem;
  grid-column: 1 / 2;

  ${(p) => p.theme?.media.breakpoints.md} {
    justify-content: space-between;
    grid-column: 1 / 3;
  }

  a {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme?.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    gap: 1.5rem;

    ${(p) => p.theme?.media.breakpoints.md} {
      font-size: 2rem;
    }

    svg {
      height: 75px;
      filter: drop-shadow(${(p) => p.theme?.colors.text} 0 0 2px);
      ${(p) => p.theme?.media.breakpoints.md} {
        height: 50px;
      }
    }
  }

  nav {
    display: none;
    gap: 2rem;

    ${(p) => p.theme?.media.breakpoints.md} {
      display: flex;
    }

    a {
      color: ${(p) => p.theme?.colors.text};
      font-size: 1.25rem;
      font-weight: bolder;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${(p) => p.theme?.colors.sasadark};
      }
    }
  }
`

export const LandingHeader = () => {
  return (
    <Header>
      <Link href="/">
        <Logo />
        dn5.run
      </Link>
      <nav>
        <For
          each={
            [
              ['/', 'Home'],
              ['/applications', 'Applications'],
              ['/services', 'Services'],
            ] as const
          }
        >
          {(value) => <Link href={value[0]}>{value[1]}</Link>}
        </For>
      </nav>
    </Header>
  )
}
