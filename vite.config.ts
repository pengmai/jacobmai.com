import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        music: resolve(__dirname, 'music/index.html'),
        code: resolve(__dirname, 'code/index.html'),
      },
    },
  },
  plugins: [
    ViteEjsPlugin(),
    {
      name: 'template-reload',
      enforce: 'post',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.ejs')) {
          server.ws.send({ type: 'full-reload', path: '*' });
        }
      },
    },
    {
      name: 'forward-to-trailing-slash',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const requestURLwithoutLeadingSlash = req.url.substring(1);
          if (['music', 'code'].includes(requestURLwithoutLeadingSlash)) {
            req.url = `${req.url}/`;
          }
          next();
        });
      },
    },
  ],
});
