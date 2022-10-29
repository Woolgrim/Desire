import { app } from "../../gulpfile.js"

export const liveServer = () => {
    app.plugins.browsersync.init({
        server: {
            baseDir: app.path.build.html
        },
        notify: false
    })
}