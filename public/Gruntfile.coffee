module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      compile:
        expand: true
        cwd: 'coffee/'
        src: ['**/*.coffee']
        dest: 'dist/js/'
        ext: '.js'

    watch:
      files: ['coffee/**/*.coffee']
      tasks: ['coffee']

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  grunt.registerTask 'default', ['watch']

