import { Component, For } from 'solid-js'
import { css, useTheme } from 'solid-styled-components'

type ProductItemType = {
  url: string
  tags: string[]
  title: string
  description: string
  imageUrl: string
}

export const ProductItem: Component<ProductItemType> = (props) => {
  const theme = useTheme()
  return (
    <a
      href={props.url}
      target={props.url.startsWith('http') ? '_blank' : ''}
      class={css`
        position: relative;
        display: flex;
        overflow: hidden;
        width: 425px;
        height: 24rem;
        height: 425px;
        align-items: flex-end;
        padding: 1rem;
        background-color: ${theme.colors.dango};
        border-radius: 0.5rem;
        box-shadow: 0 0.5rem 1rem rgb(0, 0, 0, 0.1);
        color: ${theme.colors.text};
      `}
    >
      <img
        src={props.imageUrl}
        class={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.05);
          }
        `}
      />
      <div
        class={css`
          position: relative;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 1rem;
          background-color: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem rgb(0, 0, 0, 0.1);
          text-align: left;

          span {
            padding: 0.25rem 0.5rem;
            background-color: ${theme.colors.sasa};
            border-radius: 0.25rem;
            color: white;
            font-size: 0.85rem;
          }

          h1 {
            margin-top: 1rem;
            font-size: 2rem;
          }

          p {
            font-size: 0.9rem;
          }
        `}
      >
        <div
          class={css`
            display: flex;
            gap: 1rem;
          `}
        >
          <For each={props.tags}>{(value) => <span>{value}</span>}</For>
        </div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </a>
  )
}
