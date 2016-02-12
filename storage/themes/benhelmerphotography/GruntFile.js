'use strict';

/**
 * Grunt Module.
 */
module.exports = function(grunt) {

  var theme_name = 'benhelmer_photography';

  /**
   * Global vars
   */
  var global_vars = {
    theme_name: theme_name,
    theme_css: 'css',
    theme_scss: 'scss'
  };


  grunt.initConfig({

    global_vars: global_vars,

    /**
     * Get package meta data
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Sass
     */
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= global_vars.theme_css %>/<%= global_vars.theme_name %>.css': '<%= global_vars.theme_scss %>/<%= global_vars.theme_name %>.scss'
        }
      }
    },

    /**
     * Watch
     */
    watch: {
      sass: {
        files: '<%= global_vars.theme_scss %>/**/*.scss',
        tasks: ['sass']
      }
    }
  });


  /**
   * Load Grunt plugins
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'sass',
    'watch'
  ]);
};
