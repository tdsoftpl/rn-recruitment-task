const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

module.exports = mergeConfig(defaultConfig, {
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'cjs'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs'], 
  },
});
