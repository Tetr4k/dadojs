const { parallel, src , dest}    = require('gulp')
                    ,cssmin      = require('gulp-clean-css')
                    ,concat      = require('gulp-concat')
                    ,htmlmin     = require('gulp-htmlmin')
                    ,htmlreplace = require('gulp-html-replace')
                    ,inlnsrc     = require('gulp-inline-source');
                    
exports.default = parallel(
    () => {
        return src("./src/classes/*.css")
            .pipe(concat("estilos.min.css"))
            .pipe(cssmin())
            .pipe(dest("./dist/classes/"));
    },
    () => {
        return src("./src/dados/**/*.css")
            .pipe(cssmin())
            .pipe(dest("./dist/dados/"));
    },
    () => {
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
);