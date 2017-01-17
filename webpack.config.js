var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var config = {
    // resolve: {
    //     alias: {
    //         'react': pathToReact,
    //         'react-dom': pathToReactDOM
    //     }
    // },
    entry: [
        // 'webpack/hot/dev-server',
        path.resolve(__dirname, 'react/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader']
            }
        ]/*,
        noParse: [pathToReact, pathToReactDOM]*/
    }
};


module.exports = config;