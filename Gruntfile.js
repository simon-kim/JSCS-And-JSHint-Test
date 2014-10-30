module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'jsonapi.js']
    },

    jscs: {
      all: {
        options: {
          "standard": "airbnb"
        },
        files: {
          src: ['jsonapi.js']
        }
      }
    }

  });

  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};
