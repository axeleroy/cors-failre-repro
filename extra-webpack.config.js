module.exports = (config) => ({
  ...config,
  devServer: {
    ...config.devServer,
    historyApiFallback: false,
    headers: {
      'Access-Control-Allow-Headers': '*',
    }
  }
});
