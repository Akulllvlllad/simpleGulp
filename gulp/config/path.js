import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = `./dist`
const srcFolder = `./src`


export const path = {
	build: {
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
		images: `${buildFolder}/assets`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/assets/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
}