import { app } from "../../gulpfile.js";

export const file = () => {
    return app.gulp.src(app.path.src.file)
    .pipe(app.gulp.dest(app.path.build.file))
}