import browsersync from 'browser-sync';
import concat from 'gulp-concat';
import newer from "gulp-newer"

export const plugins = {
    browsersync: browsersync,
    concat: concat,
    newer: newer,
}