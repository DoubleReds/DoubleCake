const gulp=require("gulp");
const sass=require("gulp-sass");
const babel=require("gulp-babel");
const connect=require("gulp-connect");
const imagemin=require("gulp-Imagemin");
//scss 转化成css
gulp.task("scss",()=>{
	return gulp.src(["./src/css/**/*.css","./src/scss/**/*.scss"])
	       .pipe(sass())
	       .pipe(gulp.dest("dist/css"))
	       .pipe(connect.reload())
})
gulp.task("Imagemin", function () {
    gulp.src("./src/images/*.{png,jpg,gif,ico,jpeg}")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
//es6转化成es5
gulp.task("javascript",()=>{
	return gulp.src("./src/script/**/*.js")
			.pipe(babel({preset:['env']}))
			.pipe(gulp.dest("dist/script"))
			.pipe(connect.reload())
})

//html把它分开到那去
gulp.task("html",()=>{
	return gulp.src("./src/html/**/*.html")
			.pipe(gulp.dest("dist/html"))
			.pipe(connect.reload())
})
//watch，监听
gulp.task("watch",()=>{
	 gulp.watch("./src/html/**/*.html",["html"]);
	 gulp.watch(["./src/css/**/*.css","./src/scss/**/*.scss"],["scss"]);
	 gulp.watch("./src/script/**/*.js",["javascript"]);
	 gulp.watch("./src/images/*.{png,jpg,gif,ico,jpeg}",["Imagemin"])
})
//connect,开个服务器
gulp.task("connect",()=>{
    connect.server({
	      port: 8001,
	      root:"dist",
	      livereload:true
	 })
 });
//default,在cmd中输入一个gulp后面不接任务名，默认执行connect和watch
gulp.task("default",["connect","watch"]);