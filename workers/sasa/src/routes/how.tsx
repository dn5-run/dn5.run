import { setHeads } from '@dn5-run/solid/utils'
import type { Component } from 'solid-js'
import { css } from 'solid-styled-components'

import bedrock from '~/assets/pages/how/images/bedrock.png'
import java from '~/assets/pages/how/images/java.png'
import { Header } from '~/components/header'
import { ArticleLayout } from '~/layouts/article'

const First: Component = () => {
  setHeads({
    title: '入り方 | 笹だサーバー',
    description: '笹だサーバーに入る方法を説明します。',
  })
  return (
    <div
      class={css`
        margin-bottom: 4rem;
      `}
    >
      <Header />
      <ArticleLayout>
        <h1>サーバーの入り方</h1>
        <p>サーバーへ参加する方法はとても簡単。</p>
        <h1>Java の場合</h1>
        <table>
          <thead>
            <tr>
              <th>サーバー名</th>
              <th>アドレス</th>
              <th>ポート</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>お好きな名前</td>
              <td>sasa.dn5.run</td>
              <td>25565</td>
            </tr>
          </tbody>
        </table>
        <img src={java} />
        <h1>BE の場合</h1>
        <table>
          <thead>
            <tr>
              <th>サーバー名</th>
              <th>アドレス</th>
              <th>ポート</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>お好きな名前</td>
              <td>sasa.dn5.run</td>
              <td>57019</td>
            </tr>
          </tbody>
        </table>
        <img src={bedrock} />
        <h1>入れなかったら</h1>
        <ul>
          <li>まずはアドレスとポートが合っているか今一度お確かめください。</li>
          <li>
            BE
            版(スマホ等)はよく接続ができなくなることがあります。何度か**マイクラを再起動**してから再接続してみてください。
          </li>
          <li>
            上記項目を試してもだめな場合は
            <span>
              <a href="https://dn5.run/discord">Discord サーバー</a>
            </span>
            にてお問い合わせください。
          </li>
        </ul>
      </ArticleLayout>
    </div>
  )
}

export default First
