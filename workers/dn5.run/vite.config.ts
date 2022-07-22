// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import solid from 'solid-start'
import solidStatic from 'solid-start-static'
import { defineConfig } from 'vite'
import svg from 'vite-plugin-solid-svg'

export default defineConfig({
    plugins: [
        {
            ...(await import('@mdx-js/rollup')).default({
                jsx: true,
                jsxImportSource: 'solid-js',
                providerImportSource: 'solid-mdx',
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
