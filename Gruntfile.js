/**
 * Created by Administrator on 2015/8/27.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' * slide v<%= pkg.version %>\n' +
        ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' * Licensed under the <%= pkg.license %> license\n' +
        ' */\n',
        less: {
            css: {
                options: {
                    paths: ["css"],
                    "banner": '<%= banner %>'
                },
                files: {
                    "css/<%= pkg.name %>.css": "css/<%= pkg.name %>.less"
                }
            }
        },
        min: {
            'dist': {
                'options': {
                    'report': 'gzip'
                },
                'files': [{
                    'src': 'js/<%= pkg.name %>.js',
                    'dest': 'js/<%= pkg.name %>.min.js'
                }]
            }
        },
        cssmin: {
            'dist': {
                'options': {
                    'report': false
                },
                'files': [{
                    'src': 'css/<%= pkg.name %>.css',
                    'dest': 'css/<%= pkg.name %>.min.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: [
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 8",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6"
                ]
            },
            core: {
                options: {
                    map: true
                },
                src: 'css/<%= pkg.name %>.css'
            }
        },


        watch: {
            less: {
                files: ['css/<%= pkg.name %>.less'],
                tasks: ['less:css', 'autoprefixer:core', 'cssmin:dist']
            },
            js: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['min:dist']
            }
        }


    });
    grunt.registerTask('default', ['watch']);

};