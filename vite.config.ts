import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { resolve } from 'path';

const albums = [
  {
    title: 'Feelings',
    href: 'https://soundcloud.com/acasurroundsound/feelings',
    img: '/images/feelings.jpg',
    alt: 'Feelings - Single',
    year: '2018',
  },
  {
    title: 'Prelude',
    href: 'https://indigovioletca.bandcamp.com/album/prelude-the-demo',
    img: '/images/prelude.jpg',
    alt: 'Prelude the Demo',
    year: '2016',
  },
  {
    title: 'A Story About Love',
    href: 'https://jacobmai.bandcamp.com/releases',
    img: '/images/aStoryAboutLove.jpg',
    alt: 'A Story About Love',
    year: '2015',
  },
  {
    title: 'Incandescent',
    href: 'https://thesyntheticarmy.bandcamp.com/album/incandescent',
    img: '/images/incandescent.jpg',
    alt: 'Incandescent',
    year: '2014',
  },
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        music: resolve(__dirname, 'music/index.html'),
        code: resolve(__dirname, 'code/index.html'),
        sudokusolver: resolve(__dirname, 'code/sudokusolver.html'),
      },
    },
  },
  plugins: [
    ViteEjsPlugin({ albums }),
    {
      name: 'template-reload',
      enforce: 'post',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.ejs') || file.endsWith('.html')) {
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
