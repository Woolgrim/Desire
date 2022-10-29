import { app } from "../../gulpfile.js";
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import groupMediaQ from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss';

const sass = gulpSass(dartSass);

export const css = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(webpcss())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 10 version'],
                grid: true
            })
        )
        .pipe(groupMediaQ())
        .pipe(app.plugins.concat('style.css'))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(app.plugins.concat('style.min.css'))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}