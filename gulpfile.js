var gulp = require("gulp");
var connect = require('gulp-connect');
//var concat = require("gulp-concat");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");//压缩文件
var imagemin = require("gulp-imagemin");//压缩图片
var cleanCss = require("gulp-clean-css");//压缩css
var babel = require("gulp-babel");

//1.拷贝所有html文件
gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());	
})
//2.拷贝所有的img&压缩图片
gulp.task("copy-img",function(){
	gulp.src("images/*.{jpg,png}")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//3.拷贝所有的js&ES6转换ES5
gulp.task("copy-js",function(){
	gulp.src("js/**")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//4.sass转化为css
gulp.task("sass",function(){
	gulp.src("sass/**")
	.pipe(sass())
	.pipe(cleanCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//5.合并文件
//gulp.task("scripts",function(){
//	gulp.src(js/*)
//	.pipe(concat("mainMax.js"))
//})

//6.压缩文件
gulp.task("scripts",function(){
	gulp.src("js/**")
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"));
})


gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("images/*.{jpg,png}",["copy-img"]);
	gulp.watch("js/**",["copy-js"]);
	gulp.watch("sass/**",["sass"]);
	gulp.watch("js/**",["scripts"]);
})

gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	})
})

gulp.task("default",["server","watch"]);
