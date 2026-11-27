import { Hono } from 'hono';
import routes from './routes.js';
import { renderPanel } from './panel.js';

const app = new Hono();

app.get('/', (c) => {
  return c.html(renderPanel());
});

app.route('/', routes);

export default app;