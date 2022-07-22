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
  const title = 'Aviutil Toys'
  const description = 'Aviutil をより便利にするユーティリティのセット'
  const repo_url = 'https://github.com/ddPn08/aviutil-toys'

  setHeads({
    title,
    description,
  })
  return (
    <>
      <Header />
      <Container>
        <div>
          <img src="/app/aviutl-toys/icon.png" width="300px" height="300px" alt="" />
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <a href={repo_url} target="_blank">
            ダウンロード
          </a>
        </div>
      </Container>
    </>
  )
}

export default Yomu
