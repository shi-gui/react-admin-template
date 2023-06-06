import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    // 配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      // 加载入口文件
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: `@import '@/assets/css/index.less';`
        }
      }
    },
    build: {
      outDir: 'dist', // 输出目录
      assetsDir: 'assets', // 静态资源存放目录
      assetsInlineLimit: 4096, // 资源内联阈值
      cssCodeSplit: true, // 开启css拆分
      sourcemap: false, // 开启sourcemap
      minify: 'esbuild' // 压缩工具, terser压缩率更高1%-2%,esbuild压缩更快20-40 倍
    },
    esbuild: {
      /*
        打包生产环境移除 console、debugger
        https://www.cnblogs.com/guangzan/p/16633753.html
      */
      drop: mode === 'prod' ? ['console', 'debugger'] : []
    },
    plugins: [react()],
    // 配置代理
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: false,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/cloud/, '/api')
        }
      },
      cors: true
    }
  };
});
