// @refresh reload
import { theme, GlobalStyles } from '@dn5-run/solid/style'
import { Heads } from '@dn5-run/solid/utils'
import { Component, JSX, Suspense } from 'solid-js'
import { isServer } from 'solid-js/web'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { Links, Routes, Scripts, Meta as RootMeta } from 'solid-start/root'
import { extractCss, ThemeProvider } from 'solid-styled-components'

const Providers: Component<{ children: JSX.Element }> = (props) => {
  return (
    <ErrorBoundary>
      <Suspense>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

const Root = () => {
  const body = (
    <body>
      <Heads
        default={{
          title: 'dn5.run',
          description: '適当になんとなくアプリやサービスを開発しています。',
          favicon: '/icon.webp',
          ogp: {
            url: 'https://dn5.run',
            type: 'website',
            title: 'dn5.run',
            description: '適当になんとなくアプリやサービスを開発しています。',
            site_name: 'dn5.run',
            image: 'https://dn5.run/icon.webp',
            twitter_card: 'summary',
            twitter_creator: '@ddpn08',
          },
        }}
      />
      <main>
        <Providers>
          <Routes />
        </Providers>
      </main>
      <Scripts />
    </body>
  )
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" type="image/ico" href="/icon.webp" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Zen+Kaku+Gothic+New&display=swap"
          rel="stylesheet"
        />
        <RootMeta />
        <Links />
        <GlobalStyles />
        {/* eslint-disable-next-line solid/no-innerhtml */}
        {isServer && <style id="_goober" innerHTML={extractCss()} />}
      </head>
      {body}
    </html>
  )
}

export default Root
