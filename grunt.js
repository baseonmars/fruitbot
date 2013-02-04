"use strict";
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    jasmine_node: {
      specNameMatcher: "spec",
      // load only specs containing specNameMatcher
      projectRoot: ".",
      requirejs: false,
      forceExit: true,
      jUnit: {
        report: false,
        savePath: "./build/reports/jasmine/",
        useDotNotation: true,
        consolidate: true
      }
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'spec/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        jasmine: false,
        isCommonJS: false,
        exports: false,
        spyOn: false,
        it: false,
        xit: false,
        expect: false,
        runs: false,
        waits: false,
        waitsFor: false,
        beforeEach: false,
        afterEach: false,
        describe: false,
        xdescribe: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  // Default task.
  grunt.registerTask('default', 'lint jasmine_node');
  grunt.registerTask('test', 'jasmine_node');

};
