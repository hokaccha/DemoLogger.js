gulp = require "gulp"
babelify = require "babelify"
browserify = require "browserify"
rename = require "gulp-rename"
uglify = require "gulp-uglify"
source = require "vinyl-source-stream"
buffer = require "vinyl-buffer"
bs = require "browser-sync"

src =
  js: "./src/js/DemoLogger.es6.js"

dist = "dist/js/"

name =
  js: "demologger.js"
  min: "demologger.min.js"

gulp.task "build", ->
  browserify({
    debug: true
    extensions: [".es6.js"]
    standalone: 'DemoLogger'
  })
    .transform babelify.configure({ blacklist: ["useStrict"] })
    .require(src.js, { entry: true })
    .bundle()
    .on 'error', (err) ->
      console.log "Error : #{err.message}"
      @emit 'end'
    .pipe source name.js
    .pipe gulp.dest dist
    .pipe buffer()
    .pipe uglify()
    .pipe rename name.min
    .pipe gulp.dest dist

gulp.task "default", ->
  bs.init
    server:
      baseDir: ["dist"]
      directory: false
    notify: false
    host: "localhost"
  
  gulp.watch ["src/js/**/*.es6.js", "!#{src.js}#{name.es6}"], ["build", bs.reload]
  gulp.watch ["dist/index.html"], bs.reload

gulp.task "watch", ["default"]
