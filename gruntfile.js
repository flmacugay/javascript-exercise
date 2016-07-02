module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				options: {
					banner: '/* File built <%= grunt.template.today() %> */'
				},
				files: {
					'js/main.min.js': 'src/js/*.js'
				}
			},
			dev: {
				options: {
					banner: '/* File built <%= grunt.template.today() %> */',
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				files: {
					'js/main.min.js': 'src/js/*.js'
				}
			}
		},
		watch: {
			files: ['src/js/*.js'],
			tasks: ['uglify:dist']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'uglify:dist'
	]);

	grunt.registerTask('build', [
		'uglify:dev'
	]);
};