module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};