module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
		        src: ['src/js/modules/*.js', 'src/bootstrap/assets/javascripts/bootstrap.js'],
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
			dist: {
				options: {
					sassDir: 'src/sass',
					cssDir: 'dist/css',
					outputStyle: 'compressed'
				}
			}
		},

		imagemin: {                          // Task
   			dynamic: {                         // Another target
		    	files: [{
		        	expand: true,                  // Enable dynamic expansion
		        	cwd: 'dist/img',               // Src matches are relative to this path
		        	src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
		        	dest: 'dist/img'                  // Destination path prefix
		      	}] // files
		    } // dynamic
		  
		}, //imagemin

		watch: {
			options: {
			    livereload: true,
    		},
    		joinjs: {
    			files: ['src/js/modules/*.js', 'src/bootstrap/assets/javascripts/bootstrap.js'],
				tasks: ['concat']
			}, 
    		scripts: {
    			files: ['src/js/build.js'],
				tasks: ['uglify']
			}, //scripts
			html: {
				files: ['*.html']
			}, // html
			php: {
				files: ['**/*.php']
			}, // php
			css: {
				files: ['src/**/*.scss'],
				tasks: [
					'compass'
				]
			}, //css
			images: {
				files: ['dist/img/**/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			} //imagemin
		} //watch
	}) //initConfig
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');


	grunt.registerTask('default', ['watch']);
	
} //exports