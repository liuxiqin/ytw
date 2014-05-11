module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: [{
            src: 'Scripts/modules/*.js',
            dest: 'Scripts/modules/*.min.js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['uglify']);
};