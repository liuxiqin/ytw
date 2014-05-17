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
          release: {
              options: {
                  port: 9001,
                  keepalive: true,
                  base: "dist"
              }
          },
          serve: {
              options: {
                  port: 9001,
                  keepalive: false
              }
          }
      },
      requirejs: {
          dist: {
              options: {
                  mainConfigFile: 'app/main.js',
                  baseUrl: "app",
                  name: "main",
                  include: ['main'],
                  out: 'dist/app/main.min.js'
              }
          }
      },
      karma: {
          unit: { configFile: 'karma.conf.js' },
          dist: { configFile: 'karma.conf.js', singleRun: true, }
      },
      watch: {
          serve: {
              files: ['app/**/*.js', 'GruntFile.js'],
              tasks: ['jshint:src']
          },
          options: {
              livereload: true,
          }
      },
      clean: {
          dist: ["dist"],
          'after-dist': ["dist/css/*.css", "!dist/css/*.min.css"]
      },
      cssmin: {
          dist: {
              expand: true,
              cwd: 'dist/css/',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/css/',
              ext: '.min.css'
          }
      },
      htmlmin: {                                    
          dist: {                                     
              options: {                                 
                  removeComments: true,
                  collapseWhitespace: true
              },
              files: {                                   
                  'dist/index.html': 'index.html'
              }
          },
      },
      copy: {
          dist: {
              files: [
                { expand: true, src: ['css/**'], dest: 'dist' },
                { src: "bower_components/requirejs/require.js", dest: 'dist/app/lib/require.js' }
              ]
          }
      },
      replace: {
          dist: {
              src: ['dist/index.html'],
              overwrite: true,                 // overwrite matched source files
              replacements: [{
                  from: "css/site.css",
                  to: "css/site.min.css"
              }, {
                  from: "bower_components/requirejs/require.js",
                  to: "app/lib/require.js"
              }, {
                  from: "app/main",
                  to: "app/main.min"
              }]
          }
      }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', ['jshint:test', 'karma:unit']);
  grunt.registerTask('serve', ['jshint:src', 'connect:serve', 'watch:serve']);

  grunt.registerTask('dist', ['jshint:src', 'karma:dist', 'clean:dist', 'requirejs:dist', 'copy:dist', 'cssmin:dist', 'htmlmin:dist',
      'replace:dist', 'clean:after-dist']);

  grunt.registerTask('dist-serve', ['dist', 'connect:release']);  
};