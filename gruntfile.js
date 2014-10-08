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
		        'build/js/scripts.min.js': ['src/js/*.js', 'src/bootstrap/javascripts/bootstrap.js' ]
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
		sass: {
			dist: {
				files: {
					'build/css/style.min.css' : 'src/sass/styles.scss'
				} // files
			} // dist
		}, // sass
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
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			} //css
		} //watch
	}) //initConfig
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);
	
} //exports