import { app } from "../../gulpfile.js";
import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`)
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const fonts = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
    .pipe(fonter({
        formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.projectFolder}/fonts/`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.projectFolder}/fonts/`))
}

export const fontsStyle = (cb) => {
    let file_content = fs.readFileSync(`${app.path.srcFolder}/scss/option/fonts.scss`);
    if (file_content == '') {
        fs.writeFile(`${app.path.srcFolder}/scss/option/fonts.scss`, '', cb);
        return fs.readdir(`${app.path.projectFolder}/fonts/`, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(`${app.path.srcFolder}/scss/option/fonts.scss`, '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
    cb ();
}
