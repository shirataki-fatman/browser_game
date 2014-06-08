var gulp = require("gulp"),
	concat = require("gulp-concat"),
	connect = require("gulp-connect"),
	tsc  = require("gulp-tsc");

var PATHS = {
	"tsc": [
		"./app/ts/service/*.ts",
		"./app/ts/directive/*.ts",
		"./app/ts/filter/*.ts",
		"./app/ts/*.ts"
	],
	"js_app": [
		//"./app/js/service/*.js",
		//"./app/js/directive/*.js",
		//"./app/js/filter/*.js",
		"./app/js/app.js"
	],
	"js_lib": [
		"./app/js/bower_components/angular/angular.js"
	]
};

gulp.task("compile", function() {
	gulp.src(PATHS.tsc)
		.pipe(tsc())
		.pipe(gulp.dest("app/js/"));
});

gulp.task("watch", function() {
	gulp.watch(PATHS.tsc, ["compile", "concat", "reload"]);
});

gulp.task("concat", function() {
	gulp.src(PATHS.js_app)
		.pipe(concat("app.js"))
		.pipe(gulp.dest("./public/js"));

	gulp.src(PATHS.js_lib)
		.pipe(concat("lib.js"))
		.pipe(gulp.dest("./public/js"));
});

gulp.task("server", function() {
	connect.server({
		root: "./public/",
		port: 3000,
		livereload: true
	});
});

gulp.task("reload", function() {
	gulp.src("./public/js/*.js")
		.pipe(connect.reload());
})

gulp.task("default", ["compile", "concat", "watch", "server"]);