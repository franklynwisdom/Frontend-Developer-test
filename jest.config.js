const config = {
    "transformIgnorePatterns": [
        // Change MODULE_NAME_HERE to your module that isn't being compiled
        "/node_modules/(?!axios).+\\.js$"
      ]
  };
  
  module.exports = config;