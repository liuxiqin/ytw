module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
          src: {
              files: {
                  src: ['Gruntfile.js',
                    'Scripts/modules/collections/*.js',
                    'Scripts/modules/models/*.js',
                    'Scripts/modules/routers/*.js',
                    'Scripts/modules/views/*.js',
                    'Scripts/modules/main.js']
              }
          },
          test: {
              files: { src: ['Scripts/modules/test/*Spec.js', 'gruntFile.js'] },
              options: grunt.util._.extend({}, {
                  node: true,
                  globals: {
                      angular: false,
                      inject: false,
                      jQuery: false,

                      jasmine: false,
                      afterEach: false,
                      beforeEach: false,
                      ddescribe: false,
                      describe: false
                  }
              })
          }, options: {
              node: true,
              globals: {
                  jQuery: true,
                  define: true,
                  require: true
              }
          }
      },
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
      karma: {
          unit: { configFile: 'my.conf.js' },
          server: { configFile: 'my.conf.js', background: true }
      },
      watch: {
          requirejs: {
              files: ['Scripts/modules/*.js', 'Scripts/modules/**/*.js'],
              tasks: ['karma:server', 'requirejs']
          },
          test: {
              files: ['Scripts/modules/test/*Spec.js'],
              tasks: ['jshint:test', 'karma:unit:run']
          },
          options: {
              livereload: true,
          }
      }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint:test', 'karma:unit']);
  grunt.registerTask('serve', ['jshint:src', 'connect:serve']);
  //grunt.registerTask('build', ['jshint:src', 'karma:server', 'requirejs', 'connect:server', 'watch:requirejs']);
};