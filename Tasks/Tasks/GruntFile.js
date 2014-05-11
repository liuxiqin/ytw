module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      connect: {
          server: {
              options: {
                  port: 9001
              }
          },
          serve: {
              options: {
                  port: 9001,
                  keepalive: true
              }
          }
      },
      requirejs: {
          compile: {
              options: {
                  mainConfigFile: 'Scripts/modules/main.js',
                  baseUrl: "Scripts/modules",
                  name: "main",
                  include: ['main'],
                  out: 'Scripts/modules/main.min.js'
              }
          }
      },
      watch: {
          requirejs: {
              files: ['Scripts/modules/*.js', 'Scripts/modules/**/*.js'],
              tasks: ['requirejs']
          },
          options: {
              livereload: true,
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['requirejs', 'connect:server', 'watch']);

  grunt.registerTask('serve', ['connect:serve']);
};