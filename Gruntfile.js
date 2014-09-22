/*
 * grunt-contrib-bump
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        bump: {
            options: {
                commit: false,
                tag: false,
                filepaths: ['tmp/package.json']
            }
        },
        nodeunit: ['test/*_test.js']
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'nodeunit', /*'build-contrib'*/]);
};
