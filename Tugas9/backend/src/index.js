import { Hono } from 'hono'
import routes from './routes.js'
import { renderPanel } from './panel.js'

const app = new Hono()

// Halaman awal panel uji
app.get('/', (c) => {
  return c.html(renderPanel())
})

// Sambungkan rute API
app.route('/', routes)

export default app