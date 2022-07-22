import { setHeads } from '@dn5-run/solid/utils'
import a from 'color-alpha'
import { styled } from 'solid-styled-components'

import Icon from '~/assets/images/icon.svg'
import ServerLobby from '~/assets/images/server.lobby.png'
import ServerMain from '~/assets/images/server.main.png'
import ServerMain2 from '~/assets/images/server.main2.png'

const Heading = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;

  ${(p) => p.theme?.media.breakpoints.md} {
    font-size: 3.75rem;
  }
`

const Paragraph = styled.p`
  color: white;
  font-size: 1.25rem;
  line-height: 2rem;

  ${(p) => p.theme?.media.breakpoints.md} {
    font-size: 2rem;
  }
`

const Container = styled.div`
  & > div {
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div {
      display: inline-flex;
      width: 100%;
      min-height: 50%;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`

const First = styled.div`
  background-image: url(${ServerLobby});
  font-family: 'Zen Maru Gothic', sans-serif;

  & > div {
    &:first-child {
      flex-direction: column;
      background-color: ${(p) => a(p.theme?.colors.sasadark || '', 0.5)};
      ${(p) => p.theme?.media.breakpoints.md} {
        flex-direction: row;
      }

      & > div {
        ${(p) => p.theme?.media.breakpoints.md} {
          width: 50%;
        }

        &:last-child {
          svg {
            display: inline-block;
          }
        }
      }
    }

    &:last-child {
      background-color: ${a('black' || '', 0.5)};

      h2 {
        display: inline-block;
        padding: 1rem;
        margin: 0.5rem;
        background-color: ${(p) => p.theme?.colors.sasadark};
        border-radius: 0.375rem;
        color: white;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
      }
    }
  }
`
const Second = styled.div`
  background-image: url(${ServerMain});

  div {
    display: flex;
    flex-direction: column;
  }

  div:first-child {
    ${(p) => p.theme?.media.breakpoints.md} {
      width: 70%;
      margin-right: 30%;
    }

    background-color: ${(p) => a(p.theme?.colors.sasadark || '', 0.5)};
  }

  div:last-child {
    ${(p) => p.theme?.media.breakpoints.md} {
      width: 70%;
      margin-left: 30%;
    }

    background-color: ${a('black' || '', 0.5)};
  }
`
const Third = styled.div`
  background-image: url(${ServerMain2});

  & > div {
    height: 100%;
    flex-direction: column;
    background-color: ${(p) => a(p.theme?.colors.sasadark || '', 0.5)};
  }

  a {
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.375rem;
    color: ${(p) => p.theme?.colors.sasadark};
    font-weight: 700;
  }
`

const Sasa = () => {
  setHeads({
    title: '笹だサーバー',
    description: 'dn5.runが運営するマインクラフトサーバーです。',
  })
  return (
    <>
      <Container>
        <First>
          <div>
            <div>
              <Heading>笹だサーバー</Heading>
              <Paragraph>のほほんとした、バニラ風味</Paragraph>
            </div>
            <div>
              <Icon width={250} height={250} />
            </div>
          </div>
          <div>
            <div>
              <Heading>参加はこちらから</Heading>
              <Paragraph>BEもJavaも入れるよ!</Paragraph>
              <h2>sasa.dn5.run</h2>
            </div>
          </div>
        </First>
        <Second>
          <div>
            <Heading>
              <span>あるいて、出会って 、</span>
              <span>遊んで。</span>
            </Heading>
            <Paragraph>
              <span>1.18.1の広い世界で</span>
              <span>あなただけの暮らしを。</span>
            </Paragraph>
          </div>
          <div>
            <Heading>
              <span>やりたいこと、</span>
              <span>何でもできる。</span>
            </Heading>
            <Paragraph>
              <span>笹だサーバーなら何でもできる、</span>
              <span>たぶん。</span>
            </Paragraph>
          </div>
        </Second>
        <Third>
          <div>
            <Heading>初めての人は</Heading>
            <Paragraph>
              <span>ここをクリックして</span>
              <span>このサーバーについて知っておこう。</span>
            </Paragraph>
            <a href="/first">初めての方へ</a>
          </div>
        </Third>
      </Container>
    </>
  )
}

export default Sasa
