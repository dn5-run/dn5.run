import type { Component } from 'solid-js'
import { styled } from 'solid-styled-components'

import image_lobby from '~/assets/images/lobby.webp'
import image_main from '~/assets/images/main.webp'
import image_yomogi from '~/assets/images/yomogi.webp'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`

const Item = styled.div`
  position: relative;
  overflow: hidden;
  width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    aspect-ratio: 6 / 8;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    vertical-align: top;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const ItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;

  & > div {
    height: 100%;
    padding: 0.5rem;
    background-color: ${(p) => p.theme?.colors.dangolight};

    h1 {
      color: ${(p) => p.theme?.colors.sasadark};
      font-size: 1.25rem;
    }
  }
`

export const ServerList: Component = () => {
  return (
    <Container>
      <Item>
        <img src={image_lobby} alt="" />
        <ItemInfo>
          <div>
            <h1>ロビー</h1>
            <p>各サーバーにつながるロビーです。ちょこっとアスレチックとかあったりします。</p>
          </div>
        </ItemInfo>
      </Item>
      <Item>
        <img src={image_main} alt="" />
        <ItemInfo>
          <div>
            <h1>メインサーバー (停止中)</h1>
            <p>
              何の変哲もないシンプルなサバイバルサーバーです。
              ちょこっとばかし便利なプラグインを入れています。
            </p>
          </div>
        </ItemInfo>
      </Item>
      <Item>
        <img src={image_yomogi} alt="" />
        <ItemInfo>
          <div>
            <h1>よもぎサーバー</h1>
            <p>
              Starmute氏作のデータパックをふんだんに使った、まるで異世界のようなサバイバルサーバーです。
              あなたの知らない世界を、今すぐ探検しよう！
            </p>
          </div>
        </ItemInfo>
      </Item>
    </Container>
  )
}
