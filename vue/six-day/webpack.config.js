// __dirname是node.js的全局变量，它指向当前执行脚本所在的目录。
module. exports ={
    devtool: 'eval-source-map',
    entry:__dirname + '/src/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    mode:'development',
    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } ,/*,
     module:{
     loaders:[
     {
     test:/\.css$/,
     loaders:['style-loader','css-loader']
     }
     ]

     }*/
    //模块的解析规则
    //-js 匹配所有的js 用babel-loader转义 排除掉node_modules
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/

            }
        ]
    }
};