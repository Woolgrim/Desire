import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = "./src";
const buildFolder = rootFolder;

export const path = {
    build: {
        file: `${buildFolder}/file/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
    },
    src: {
        file: `${srcFolder}/file/**`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/main.js`,
        img: `${srcFolder}/img/**/*.{jpg,png,gif,ico,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
    },
    watch: {
        file: `${srcFolder}/file/**`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    },
    clean: buildFolder,
    projectFolder: buildFolder,
    srcFolder: srcFolder,
}