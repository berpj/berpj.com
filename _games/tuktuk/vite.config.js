import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

export default defineConfig({
  base: '/tuktuk/',
  build: {
    outDir: fileURLToPath(new URL('../../tuktuk', import.meta.url)),
    emptyOutDir: true,
  },
});
