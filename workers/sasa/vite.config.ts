// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import solid from 'solid-start'
import solidStatic from 'solid-start-static'
import { defineConfig } from 'vite'
import svg from 'vite-plugin-solid-svg'

export default defineConfig({
    plugins: [
        {
            ...mdx({
                jsx: true,
                jsxImportSource: 'solid-jsx',
                providerImportSource: 'solid-mdx',
                remarkPlugins: [remarkGfm],
            }),
            enforce: 'pre',
        },
        svg(),
        solid({
            extensions: ['.mdx', '.md'],
            adapter: solidStatic(),
        }),
    ],
})
