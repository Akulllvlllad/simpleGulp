import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: true })
		.pipe(app.plugins.replace(/@assets\//g, '../assets/'))
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(groupCssMediaQueries())
		.pipe(
			webpcss({
				webClass: '.webp',
				npWebpClass: '.no-webp',
			})
		)
		.pipe(
			autoprefixer({
				grid: true,
				overrideBrowserslist: ['last 3 versions'],
				cascade: true,
			})
		)
		.pipe(cleanCss())
		.pipe(
			rename({
				extname: '.min.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}
