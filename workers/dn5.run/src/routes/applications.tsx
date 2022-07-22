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
    title: 'Applications | dn5.run',
    description: 'dn5.runが公開しているアプリケーション一覧です。',
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
          <h1>Applications</h1>
          <p>現在公開中のアプリケーション一覧です。</p>
        </div>
        <div>
          <For<ComponentProps<typeof ProductItem>, JSX.Element>
            each={[
              {
                url: '/app/yomu',
                title: 'Yomu',
                description: '便利で新しいDiscordチャット読み上げBot',
                tags: ['discord', 'bot', '読み上げ'],
                imageUrl: '/app/yomu/icon.png',
              },
              {
                url: '/app/aviutl-toys',
                title: 'Aviutl Toys',
                description: 'Aviutil をより便利にするユーティリティのセット',
                tags: ['aviutl', 'movie', 'utility'],
                imageUrl: '/app/aviutl-toys/icon.png',
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
