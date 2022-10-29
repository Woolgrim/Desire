import { app } from "../../gulpfile.js";
import webpack from 'webpack-stream'

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        .pipe(webpack({
            mode: "production",
            output: {
                filename: 'main.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}