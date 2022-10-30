// import modules
import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/plugins.js";
// global object
export const app = {
    gulp: gulp,
    path: path,
    plugins: plugins,
}
// import function
import { reset } from "./gulp/config/reset.js";
import { html } from "./gulp/config/html.js";
import { css } from "./gulp/config/css.js";
import { js } from "./gulp/config/js.js";
import { img } from "./gulp/config/img.js";
import {file} from "./gulp/config/file.js"
import { otfToTtf, fonts, fontsStyle } from "./gulp/config/fonts.js";
import { liveServer } from "./gulp/config/liveserver.js";

// watch files
export const watchFiles = () => {
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.scss, css);
    gulp.watch(app.path.watch.js, js);
    gulp.watch(app.path.watch.img, img);
}
// start function
export const convertFonts = gulp.series(reset, otfToTtf, fonts, fontsStyle);
export const task = gulp.parallel(html, css, js, img, file);
export const dev = gulp.series(convertFonts, task, gulp.parallel(watchFiles, liveServer));
export const build = gulp.series(convertFonts, task);

export default dev;