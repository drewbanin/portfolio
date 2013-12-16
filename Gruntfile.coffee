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

    recess:
      options:
        compile: true
      bootstrap:
        src: ['public/less/bootstrap.less']
        dest: 'public/dist/css/bootstrap.css'

    nodemon:
      dev:
        options:
          file: 'app.js'
          env:
            PORT: '80'

    watch:
      coffee:
        files: ['**/*.coffee']
        tasks: ['coffee']

      recess: {
        files: 'public/less/*.less',
        tasks: ['recess']
      }

    concurrent:
      run:
        tasks: ['watch', 'nodemon']
        options:
          logConcurrentOutput: true
        

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-recess'
  grunt.loadNpmTasks 'grunt-nodemon'
  grunt.loadNpmTasks 'grunt-concurrent'

  grunt.registerTask 'default', ['concurrent:run']
  grunt.registerTask 'build', ['coffee:public', 'coffee:api', 'recess']
  grunt.registerTask 'serve', ['nodemon']

  # Remember to copy fonts/ dir to dist/ dir

