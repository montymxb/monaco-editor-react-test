import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin';
//import vsixPlugin from '@codingame/monaco-vscode-rollup-vsix-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react()
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        importMetaUrlPlugin
      ]
    },
    include: [
      '@testing-library/react',
      'vscode/localExtensionHost',
      'vscode-textmate',
      'vscode-oniguruma'
    ]
  }
})
