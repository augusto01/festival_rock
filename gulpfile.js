const { src, dest, watch, parallel } = require("gulp");
const plumber = require('gulp-plumber');
const sass = require("gulp-sass")(require('sass'));

// Tarea para compilar estilos CSS
function css(callback) {
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));  // Corregir la carpeta de destino a 'build/css'
    callback();
}

// Tarea para observar cambios y ejecutar la tarea css
function dev(callback) {
    watch('src/scss/**/*.scss', css);
    watch('src/scss/js/**/*.js', javascript);  // Agregar esta línea para observar cambios en archivos JavaScript
    callback();
}

// Tarea para copiar archivos JavaScript
function javascript(done) {
    src('src/scss/js/**/*.js')
        .pipe(dest("build/js"));
    done();
}

// Exportar tareas
exports.css = css;
exports.js = javascript;
exports.dev = parallel(dev,javascript);
