module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
		      dist: {
		        src: ['src/js/modules/*.js', 'src/bootstrap/javascripts/bootstrap.js'],
		        dest: 'src/js/build.js',
		      } //dist
		}, //concat

		uglify: {
			options: {
		      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		        '<%= grunt.template.today("yyyy-mm-dd") %> */'
		    },
		    dist: {
		    	files: {
		          'dist/js/build.min.js': ['src/js/build.js']
		        }
		    } // dist
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
					'dist/css/build.min.css' : 'src/sass/styles.scss'
				} // files
			} // dist
		}, // sass
		watch: {
			options: {
			    livereload: true,
    		},
    		joinjs: {
    			files: ['src/js/modules/*.js', 'src/bootstrap/javascripts/bootstrap.js'],
				tasks: ['concat']
			}, 
    		scripts: {
    			files: ['src/js/build.js'],
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
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['watch']);
	
} //exports