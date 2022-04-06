const webpack = require('webpack');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs':'320px',
      // @media (min-width:320px)
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
    
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
}

