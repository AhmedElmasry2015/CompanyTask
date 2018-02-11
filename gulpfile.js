
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imageMin = require('gulp-imagemin'); 
//const concat =require('gulp-concat');
const uglify = require('gulp-uglify');
gulp.task("copyHtml",function(){
    gulp.src('./*.html')
       .pipe(gulp.dest('Dist'));
   });
  
// optimize images 
gulp.task('imageMin',()=>
gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('Dist/images'))
);

gulp.task("minfy",function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('Dist/js'));
    });



gulp.task("sass",function(){
    gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Dist/css'))
        .pipe(browserSync.stream()); // that line will create sync file
});


 gulp.task('serve',['sass'],function(){
    browserSync.init({
        server: '.'
    })
    gulp.watch('css/*.scss',['sass']);
    gulp.watch('index.html').on('change',browserSync.reload);
    });

    
    /*gulp.task("default",["serve"]);*/