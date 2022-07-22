import { setHeads } from '@dn5-run/solid'
import { css, styled } from 'solid-styled-components'

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

const Items = styled.div`
  display: grid;
  margin: 0 2rem;
  grid-column: 1 / 3;
  grid-template-columns: repeat(1, 1fr);

  ${(p) => p.theme?.media.breakpoints.md} {
    margin: 0 4rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 0.5rem;
    font-weight: normal;
  }

  a {
    p {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      margin-bottom: 1rem;
      background-color: ${(p) => p.theme?.colors.sasadark};
      border-radius: 0.5rem;
      color: white;
    }
  }
`

const Discord = () => {
  setHeads({
    title: 'Discord | dn5.run',
    description: 'dn5.runのDiscordサーバーです。',
  })
  return (
    <Container>
      <LandingHeader />
      <Items>
        <Item>
          <div>
            <h1>Discord</h1>
            <h3>下のボタンをクリックしてDiscordコミュニティに参加しよう。</h3>
            <a href="https://discord.gg/8FaDWTF62z" target="_blank">
              <p>参加する</p>
            </a>
            <p>サーバーには様々なジャンルのコミュニティがあります。</p>
            <p>
              パソコンや、ガジェット関連のカテゴリや、ゲーム、プログラミングやサーバー開発など...
            </p>
          </div>
        </Item>
        <Item>
          <iframe
            src="https://discord.com/widget?id=694433205620572191&theme=dark"
            width="350"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            class={css`
              border: none;
            `}
          />
        </Item>
      </Items>
    </Container>
  )
}

export default Discord
