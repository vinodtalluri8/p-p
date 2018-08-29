

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-war');

    // Project configuration.

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        war: {

            target: {

                options: {

                    war_dist_folder: 'dist', /* Folder where to generate the WAR. */

                    war_name: 'InternalControls-webapp'                    /* The name fo the WAR file (.war will be the extension) */

                },

                files: [

                    {

                        expand: true,

                        cwd: 'dist',

                        src: ['**'],

                        dest: ''

                    }

                ]

            }

        }

    });




    grunt.registerTask('default', ['war']);

};

