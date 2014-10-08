module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
		      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		        '<%= grunt.template.today("yyyy-mm-dd") %> */'
		    },
		    my_target: {
		      files: {
		        'build/js/output.min.js': ['src/js/*.js']
		      }
		    }
		},
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, // compass
		watch: {
			options: {
			    livereload: true,
    		},
    		scripts: {
    			files: ['src/js/*.js'],
				tasks: ['uglify']
			}, //scripts
			html: {
				files: ['*.html']
			}, // html
			sass: {
				files: ['src/sass/*.scss'],
				tasks: ['compass:dev']
			} //sass
		} //watch
	}) //initConfig
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['watch']);
	
} //exports