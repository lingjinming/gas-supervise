import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':'./src',
    }
  },
  server: {
    port: 8080,
    proxy: {
      '/config.js': {
        target: 'https://aiot.citysafety.com/gasguard',
        changeOrigin: true,
      },
      '/apilogin':{
        target: 'https://aiot.citysafety.com/gasguard',
        changeOrigin: true,
      },
      '/gas-supervise': {
        target: 'https://aiot.citysafety.com/gasguard',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    uni(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        'uni-app',
      ],
      dts: 'typings/auto-imports.d.ts',
    })

  ],
});
