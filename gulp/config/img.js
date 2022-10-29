import { app } from "../../gulpfile.js";
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const img = () => {
    return app.gulp.src(app.path.src.img)
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(webp({
        quality: 70,
    }))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.img))
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 3,
        svgoPlugins: { removeViewBox: true }
    }))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browsersync.stream())
}