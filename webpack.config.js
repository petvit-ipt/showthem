import { resolve as _resolve } from 'path';

export const entry = {
  main: './ext/script/main.js',
  additional: './ext/script/additional.js'
};
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: '[name].bundle.js',
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
};
export const resolve = {
  extensions: ['.js'] // Ensure that webpack resolves .js files
};
