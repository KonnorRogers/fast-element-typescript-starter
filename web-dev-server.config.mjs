import { esbuildPlugin } from '@web/dev-server-esbuild'
export default ({
  rootDir: '.',
  nodeResolve: true,
  appIndex: 'index.html',
  open: true,
  plugins: [
    esbuildPlugin({ ts: true })
  ]
})
