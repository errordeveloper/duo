const mix = require('laravel-mix')
const webpack = require('webpack')

mix.postCss('_assets/app.css', 'assets/', [
  require('postcss-import')({
    from: '_assets/app.css'
  }),
  require('cssnano')()
])
