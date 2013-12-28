'use strict';

module.exports = {
  options: {
    logConcurrentOutput: true
  },

  dev: {
    tasks: ['connect', 'watch']
  },

  build: {
    tasks: ['styles', 'views', 'js'],
  }
};
