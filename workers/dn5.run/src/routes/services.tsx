import { setHeads } from '@dn5-run/solid'
import { Component, ComponentProps, For, JSX } from 'solid-js'
import { css, styled } from 'solid-styled-components'

import { ProductItem } from '../components/products'

import { Header } from '~/components/header'

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;

  div:first-child {
    h1 {
      font-size: 2rem;
    }
  }

  & > div:last-child {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.5rem;
    gap: 1rem;

    ${(p) => p.theme?.media.breakpoints.md} {
      padding: 0 10rem;
    }
  }
`

const Applications: Component = () => {
  setHeads({
    title: 'Services | dn5.run',
    description: 'dn5.runが運営してるサービス一覧です。',
  })
  return (
    <>
      <Header />
      <Container>
        <div
          class={css`
            margin-bottom: 2rem;
          `}
        >
          <h1>Services</h1>
          <p>dn5.runが運営するサービス一覧です。</p>
        </div>
        <div
          class={css`
            display: flex;
            flex-wrap: wrap;
            padding: 0 10rem;
            gap: 1rem;
          `}
        >
          <For<ComponentProps<typeof ProductItem>, JSX.Element>
            each={[
              {
                url: 'https://sasaweb.dn5.run',
                title: '笹だサーバー',
                description: 'のほほんと雰囲気で続けているマインクラフトサーバー',
                tags: ['minecraft', 'server', 'multiplayer'],
                imageUrl: '/service/sasa/icon.png',
              },
            ]}
          >
            {(value) => <ProductItem {...value} />}
          </For>
        </div>
      </Container>
    </>
  )
}

export default Applications
