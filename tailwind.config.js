/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 这将禁用 Tailwind 的默认间距比例并生成类似p-full、m-half、w-quarter等类
      spacing: {
        full: '100%',
        half: '50%',
        quarter: '25%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        0: '0',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px'
      },
      // 文字大小
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
        42: '42px',
        44: '44px',
        46: '46px',
        48: '48px',
        50: '50px'
      },
      // fontWeight
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900'
      }
    }
  },
  plugins: [],
  /**
   * preflight: false
   * 禁用预加载，解决和antd的样式冲突（❌这样会导致某些class失效如border-t等❌）
   * tailwind预加载的样式 https://unpkg.com/browse/tailwindcss@3.0.23/src/css/preflight.css
   */
  corePlugins: {
    preflight: false
  }
};
