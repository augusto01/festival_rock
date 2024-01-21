function tarea(callback){
    console.log("mi primer tarea");
    callback();
    
}

exports.primerTarea = tarea;

//css
const plumber = require('gulp-plumber');
const sass = require("gulp-sass")(require('sass'));
const {src,dest, watch}= require("gulp");
//src sirve para identificar algun archivo 

//dest sirve para guardar dicho archivo
//imagenes


function css (callback){
    // pasos para compilar el archivo SASS
        //identificamos el archivo lo compliamos y lo almacenamos en el disco mediante pipes, los pipes permiten realizar acciones secuenciales!
        src('src/scss/**/*.scss')
            .pipe(plumber())       
             //1 identificar el archivo sass
            .pipe(sass())    
            //2 compilarlo
            .pipe(dest("build.css"));    //3 almacenarlo en el disco duro /ssd
            
    callback();
}

function dev (callback){
    watch('src/scss/**/*.scss',css);
    
    callback();
}




exports.css= css;
exports.dev = dev;

