/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  /**
   * 禁用预加载，解决和antd的样式冲突
   * tailwind预加载的样式 https://unpkg.com/browse/tailwindcss@3.0.23/src/css/preflight.css
   */
  corePlugins: {
    preflight: false
  }
};
