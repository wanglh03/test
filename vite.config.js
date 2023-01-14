import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx'],
    },
  })],
  // mode : 'development',  // 开发环境
  mode: 'production',  // 生产环境

  // webpack的入口
  // entry: './src/index.js',
  server: {   // 开发服务器配置
    open: true,  // 启动时默认打开浏览器
    port: 8888,  // 启动的端口号
  },
  // 加载器
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'],
      },
      // 处理less
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif|jpeg)$/i, // 匹配图片文件
        type: 'asset', // 在导出一个 data URI 和一个单独的文件之间自动选择
      },
      // 识别字体文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',  // 当做静态资源直接复制文件
        generator: {
          filename: 'font/[name].[hash:6][ext]', // 放到dist/font文件夹, 文件名格式如左
        },
      },
      // babel处理高等级的js语法
      {
        test: /\.m?js$/, // 匹配.mjs或者.js结尾文件
        // 排除node_modules第三方包里js文件=>别人写的
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // 允许webpack使用babel降级js代码
          options: {
            presets: ['@babel/preset-env'], // 使用这个包里记录的规则
          },
        },
      },
    ],
  },
})
