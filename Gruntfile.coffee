module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      public:
        expand: true
        cwd: 'public/coffee/'
        src: ['**/*.coffee']
        dest: 'public/dist/js/'
        ext: '.js'

      api:
        expand: true
        cwd: 'api/'
        src: ['**/*.coffee']
        dest: "api/"
        ext: '.js'

    recess: {
      options: {
        compile: true,
      },
      bootstrap: {
        src: ['public/less/bootstrap.less'],
        dest: 'public/dist/css/bootstrap.css'
      }
    }

    watch:
      coffee:
        files: ['**/*.coffee']
        tasks: ['coffee']

      recess: {
        files: 'public/less/*.less',
        tasks: ['recess']
      }

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-recess'

  grunt.registerTask 'default', ['watch']

  # Remember to copy fonts/ dir to dist/ dir

