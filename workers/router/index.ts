import { Hono } from 'hono'

const app = new Hono<{
    SERVICE_BINDING_BASE: ServiceWorkerGlobalScope
    SERVICE_BINDING_SASA: ServiceWorkerGlobalScope
}>()

app.use('/service/sasa/*', (c) => {
    console.log('sasa')
    const cloned = c.req.clone()
    const url = new URL(cloned.url)
    url.pathname = url.pathname.replace('/service/sasa', '')
    return fetch(
        new Request(url.toString().replace(url.origin, 'https://dn5-run-sasa.pages.dev'), {
            ...cloned,
        }),
    )
})

app.use('*', (c) => {
    console.log('dn5')
    const cloned = c.req.clone()
    const url = new URL(cloned.url)
    return fetch(
        new Request(url.toString().replace(url.origin, 'https://dn5-run-base.pages.dev'), {
            ...cloned,
        }),
    )
})

export default app
