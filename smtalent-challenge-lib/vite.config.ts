/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { extname, relative, resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { globSync } from 'glob'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ['**/*.stories.tsx', 'lib/test', '**/*.test.tsx'],
      tsconfigPath: 'tsconfig.app.json',
    }),
    libInjectCss(),
  ],
  resolve: {
    alias: {
      '@lib': resolve(__dirname, './lib'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'SmtalentChallengeLib',
      fileName: 'smtalent-challenge-lib',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync(['lib/components/**/index.tsx', 'lib/main.ts']).map((file) => {
          const entryName = relative('lib', file.slice(0, file.length - extname(file).length))
          const entryUrl = fileURLToPath(new URL(file, import.meta.url))
          return [entryName, entryUrl]
        })
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './lib/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      include: ['src/components'],
      exclude: ['**/*.stories.tsx'],
    },
  },
})
