'use strict';

module.exports = {
  compile: {
    files: [{
      flatten: true,
      expand: true,
      src: ['<%= vars.viewsPath %>'],
      dest: '<%= vars.buildPath %>',
      ext: '.html',
    }],
  }
};
