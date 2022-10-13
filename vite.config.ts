import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    // optional
    alias: [
      {
        find: '~/',
        replacement: path.join(__dirname, 'src/'),
      },
    ],
  },
  esbuild: {
    jsxInject: "import React from 'react';",
  },
});
