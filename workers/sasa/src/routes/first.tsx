import { setHeads } from '@dn5-run/solid/utils'
import type { Component } from 'solid-js'
import { css, useTheme } from 'solid-styled-components'

import { Header } from '~/components/header'
import { ServerList } from '~/components/server-list'
import { ArticleLayout } from '~/layouts/article'

const First: Component = () => {
  setHeads({
    title: 'はじめに | 笹だサーバー',
    description: '笹だサーバーについていろいろ説明します。',
  })
  const theme = useTheme()
  return (
    <div
      class={css`
        margin-bottom: 4rem;
      `}
    >
      <Header />
      <ArticleLayout>
        <h1>笹だサーバーってなんやねん</h1>
        <p>だれでも入れるマインクラフトサーバー！ 基本的にずっと稼働しているよ。</p>
        <a href="/how">参加方法</a>
        <h2>サーバー全体のルール</h2>
        <p>ルールを守らない人は基本的に BAN になるよ。気をつけてね。</p>
        <ul>
          <li>
            他人の嫌がることをしない。
            <ul>
              <li>暴言、理由のない攻撃、窃盗、建造物の破壊</li>
            </ul>
          </li>
          <li>
            チートを使わない。
            <ul>
              <li>チートクライアントを使用して参加することは禁止です。</li>
              <li>Xray 等のテクスチャで再現可能なものも禁止です。</li>
            </ul>
          </li>
          <li>
            負荷をかけない。
            <ul>
              <li>意図的にサーバーに負荷をかけることは禁止です。</li>
            </ul>
          </li>
        </ul>
      </ArticleLayout>
      <div
        class={css`
          margin: 0 0.5rem;
          ${theme.media.breakpoints.md} {
            margin: 0 24rem;
          }
        `}
      >
        <ServerList />
      </div>
    </div>
  )
}

export default First
