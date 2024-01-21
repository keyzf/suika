import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'common',
      fileName: (format) => `common.${format}.js`,
    },
  },
});
