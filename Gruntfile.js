// Generated on 2015-03-20 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-string-replace');

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  var cdncustom = (function() {
    var cdn = require('google-cdn-data');

    cdn['skel-old'] = {
      versions: ['2.2.1'],
      url: function (version) {
        return '//cdnjs.cloudflare.com/ajax/libs/skel/' + version + '/skel.min.js';
      }
    };

    cdn['sweetalert'] = {
      versions: ['1.0.1'],
      url: function (version) {
        return '//cdnjs.cloudflare.com/ajax/libs/sweetalert/' + version + '/sweetalert.min.js';
      }
    };

    return cdn;
  })();

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/styles/',
          src: '{,*/}*.css',
          dest: '<%= yeoman.dist %>/styles/'
        }]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/style.css': '<%= yeoman.dist %>/styles/style.css',
          '<%= yeoman.dist %>/styles/style-mobile.css': '<%= yeoman.dist %>/styles/style-mobile.css',
          '<%= yeoman.dist %>/styles/style-desktop.css': '<%= yeoman.dist %>/styles/style-desktop.css',
          '<%= yeoman.dist %>/styles/style-1000px.css': '<%= yeoman.dist %>/styles/style-1000px.css',
          '<%= yeoman.dist %>/styles/ie/v8.css': '<%= yeoman.dist %>/styles/ie/v8.css',
        }
      }
    },

    concat: {
      dist: {}
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '**/{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      options: {
        cdn: cdncustom
      },
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    'string-replace': {
      dist: {
        files: {
          '<%= yeoman.dist %>/': '<%= yeoman.dist %>/*.html'
        },
        options: {
          replacements: [
            {
              pattern: 'bower_components/skel-old/src/skel-layers.js',
              replacement: '//cdnjs.cloudflare.com/ajax/libs/skel-layers/2.0.2/skel-layers.min.js'
            }, {
              pattern: 'bower_components/font-awesome/css/font-awesome.css',
              replacement: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css'
            }, {
              pattern: 'bower_components/sweetalert/dist/sweetalert.css',
              replacement: '//cdnjs.cloudflare.com/ajax/libs/sweetalert/1.0.1/sweetalert.min.css'
            }
          ]
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'templates/{,*/}*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'styles/{,*/}*.*',
            'scripts/php/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }]
      },
    fonts: {
      expand: true,
      cwd: 'bower_components/font-awesome/fonts/',
      dest: '<%= yeoman.dist %>/fonts/',
      src: '*.*'
    }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      dist: [
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',                 //Wipes out the tmp and dist folders to start fresh.

    'useminPrepare',              //Generates a configuration file for concat, uglify, and cssmin based on index.html.
                                  // <!-- build:js(.)  --> & <!-- build:css(.) --> comment blocks denote this.

    'concurrent:dist',            //Performs tasks concurrently to speed up build time. 'imagemin' and 'svgmin'
                                  //imagemin compresses images in /images
                                  //svgmin compresses .svg files in /images

    'copy:dist',                  //Copy all files for deployment to the dist folder.

    'copy:fonts',                 //Copy all files for deployment to the dist folder.

    'autoprefixer',               //Adds missing browser prefixes to css files.
                                  //leaves newly prefixed files in .tmp/styles

    'concat',                     //Concats all javascript and css sourcefiles together.
                                  //scripts.js is made from the app's js files.
                                  //main.css is made from the .tmp/styles/main.css
                                  //vendor.css is likewise made from dependencies css files.

    'ngAnnotate',                 //Ensures minification works with Angular expressions.

    'cdnify',                     //Rewrites URLs for CDNs so they work properly after deployment.

    'string-replace',             //Rewrites URLs that don't get caught with cdnify

    'cssmin',                     //Performs custom cssmin not collected during useminPrepare.

    'usemin',                     //Performs tasks set during useminPrepare.

    'htmlmin'                     //Minifies all html files.
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
