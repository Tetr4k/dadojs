const { parallel, src , dest, watch} = require('gulp')
    ,cssmin = require('gulp-clean-css')
    ,concat = require('gulp-concat')
    ,htmlmin = require('gulp-htmlmin')
    ,htmlreplace = require('gulp-html-replace')
    ,inlnsrc = require('gulp-inline-source')
    ,browserSync = require('browser-sync').create();

const reload = browserSync.reload;

sincronizaBrowser = () => {
    browserSync.init({
        proxy: "localhost:5500"
    });
    watch("src/**/*.css").on('change', reload);
    watch("src/**/*.html").on('change', reload);
};

minCssClasses = () => {
    return src("./src/classes/*.css")
        .pipe(concat("estilos.min.css"))
        .pipe(cssmin())
        .pipe(dest("./dist/classes/"));
}

buildHTML = () => {
    return src("./src/**/*.html")
        .pipe(htmlreplace(
            {
                css:{
                    src: "classes/estilos.min.css"
                },
                cssDado:{
                    src: "../../classes/estilos.min.css"
                }
            }
        ))
        .pipe(inlnsrc())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("./dist/"));
}

exports.default = sincronizaBrowser;
exports.build = parallel(minCssClasses, buildHTML);