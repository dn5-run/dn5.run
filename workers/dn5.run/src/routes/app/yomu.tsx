import { setHeads } from '@dn5-run/solid'
import { styled } from 'solid-styled-components'

import { Header } from '~/components/header'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;

  div:first-child {
    display: inline-block;
    text-align: center;
  }

  div:last-child {
    margin-top: 2rem;
    text-align: center;

    p {
      margin-bottom: 1rem;
    }

    a {
      padding: 0.75rem 1.5rem;
      background-color: ${(p) => p.theme?.colors.sasadark};
      border-radius: 0.5rem;
      color: white;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
export const Yomu = () => {
  const title = 'Yomu'
  const description = '便利で新しいDiscordチャット読み上げBot'
  const discord_invite_url =
    'https://discord.com/api/oauth2/authorize?client_id=955718798667829268&permissions=274881137664&scope=bot%20applications.commands'

  setHeads({
    title,
    description,
  })

  return (
    <>
      <Header />
      <Container>
        <div>
          <img src="/app/yomu/icon.png" width="300px" height="300px" alt="" />
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <h1>現在開発中</h1>
          <p>
            <span>開発段階のBotを招待できます。</span>
            <span>予告なく再起動する場合がございます。</span>
          </p>
          <a href={discord_invite_url} target="_blank">
            招待する
          </a>
        </div>
      </Container>
    </>
  )
}

export default Yomu
