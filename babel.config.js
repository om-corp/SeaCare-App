module.exports = function (api) {
  api.cache(true);
  let plugins = [];
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin'
    ],
  };
};
