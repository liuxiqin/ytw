module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
          src: {
              files: {
                  src: ['Gruntfile.js',
                    'app/collections/*.js',
                    'app/models/*.js',
                    'app/routers/*.js',
                    'app/views/*.js',
                    'app/main.js']
              }
          },
          test: {
              files: {
                  src: ['test/**/*Spec.js', 'GruntFile.js']
              }
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
                  mainConfigFile: 'app/main.js',
                  baseUrl: "app",
                  name: "main",
                  include: ['main'],
                  out: 'app/main.min.js'
              }
          }
      },
      karma: {
          unit: { configFile: 'karma.conf.js' },
          server: { configFile: 'karma.conf.js', background: true }
      },
      watch: {
          requirejs: {
              files: ['app/*.js', 'app/**/*.js'],
              tasks: ['karma:server', 'requirejs']
          },
          test: {
              files: ['/test/*Spec.js', 'test/test-main.js', 'karma.conf.js'],
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