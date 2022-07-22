import { css } from 'solid-styled-components'

const NotFound = () => {
  return (
    <div
      class={css`
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1>404 Page not found</h1>
      <h3>ページが見つかりません。</h3>
    </div>
  )
}

export default NotFound
