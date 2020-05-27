module.exports = {
    // 1
    entry: './src/index.js',
    // 2
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    // 3
    devServer: {
      contentBase: './dist'
    },
    // 4
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'] //4a
          },{
              test: /\.s?css$/,
              use: ['style-loader', 
                    'css-loader',
                    'sass-loader'] //4b
          }
        ]
      },
    // 5.  Tell webpack which files to try to resolve using the above rules, and in which order
    resolve: {
        extensions: ['*', '.js']
    },
  };


// 1:   Use the src/index.js file as entry point to bundle it. 
//      If the src/index.js file imports other JavaScript files, bundle them as well.

// 2:   The bundled source code files shall result in a bundle.js file in the /dist folder.

// 3:   The /dist folder will be used to serve our application to the browser.

// 4:   Tell Webpack which loaders to use for which files and which wto exclude for each rule.

// 4a:  Tell webpack to compile js files using babel

// 4b:  style-loader - loads the css into HTML.  
//      css-loader - compiles css in js and bundles it.
//      sass-loader - uses node-sass to convert scss to css
//      ? - makese s in scss optional