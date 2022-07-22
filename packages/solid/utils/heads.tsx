import { Link } from 'solid-app-router'
import { Component, createSignal } from 'solid-js'
import { Meta, Title } from 'solid-meta'

type HeadType = {
  title?: string
  description?: string
  favicon?: string
  ogp?: {
    url?: string
    type?: string
    title?: string
    description?: string
    site_name?: string
    image?: string
    twitter_card?: string
    twitter_creator?: string
  }
}

type HeadTypeRequired = {
  title: string
  description: string
  favicon: string
  ogp: {
    url: string
    type: string
    title: string
    description: string
    site_name: string
    image: string
    twitter_card: string
    twitter_creator: string
  }
}

const [heads, setHeads] = createSignal<HeadType>({})

export { setHeads }


export const Heads: Component<{
  default: HeadTypeRequired
}> = (props) => {
  return (
    <>
      <Link rel="shorcut icon" href={heads().favicon || props.default.favicon} />
      <Title>{heads().title || props.default.title}</Title>
      <Meta property="description" content={heads().description || props.default.description} />

      <Meta property="og:url" content={heads().ogp?.url || props.default.ogp.url} />
      <Meta property="og:type" content={heads().ogp?.type || props.default.ogp.type} />
      <Meta
        property="og:title"
        content={heads().ogp?.title || heads().title || props.default.ogp.title}
      />
      <Meta
        property="og:description"
        content={heads().ogp?.description || heads().description || props.default.ogp.description}
      />
      <Meta
        property="og:site_name"
        content={heads().ogp?.site_name || props.default.ogp.site_name}
      />
      <Meta property="og:image" content={heads().ogp?.image || props.default.ogp.image} />

      <Meta
        name="twitter:card"
        content={heads().ogp?.twitter_card || props.default.ogp.twitter_card}
      />
      <Meta
        name="twitter:creator"
        content={heads().ogp?.twitter_creator || props.default.ogp.twitter_creator}
      />
    </>
  )
}
