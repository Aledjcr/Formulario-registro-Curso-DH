const submitFunction = (event) => {
   if (!validarFormulario()) {
    event.preventDefault();
   } else {
    event.preventDefault();
    
    alert(
        'Los datos enviados fuueron: ' + '\n'+
        'Nombre: ' + document.getElementById('nombre').value + '\n'+
        'Apellido: ' + document.getElementById('apellido').value + '\n'+
        'Documento: ' + document.getElementById('documento').value + '\n'+
        'Email: ' + document.getElementById('email').value + '\n'+
        'Edad: ' + document.getElementById('edad').value + '\n'+
        'Actividad: ' + document.getElementById('actividad').value + '\n'+
        'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
    )
   }
}
 

// funcion que escucha el envío del formulario
document.getElementById('formulario').addEventListener('submit', submitFunction);



function validarFormulario() {
    //inicializo 2 variables, una para guardar los elementos de texto del formulario, y otra para iniciar una "validacion" como true
    let camposTexto = document.querySelectorAll('input[type="text"]'); //el querySelectorAll me va a traer todo lo que coincida con inputs de tipo texto
    let validacionCorrecta = true;

    //Recorro la variable que inicialicé antes.
    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo, '¡Este campo es requerido!')
            validacionCorrecta = false
        } else if (campo.value.length > 0 && campo.value.length <= 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false
        } else {
            ocultarError(errorCampo)
        }
    })

    //esto valida el email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')
    
    if(/^[^\s@]+@ [^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, '¡Ingrese un correo electronico valido!')
    }
    
    //Validacion de edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')
    
    
    if (edad.value < 18  || edad.value <= ' ') {
        mostrarError(errorEdad, 'Debes ser mayor de 18 años')
        validacionCorrecta = false
    } else {
        ocultarError(errorEdad)
    }
    
    //Validacion de actividad 
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    
    if (actividad.value == '') {
        mostrarError(errorActividad, 'Por favor, selecciona una actividad')
        validacionCorrecta = false
    } else {
        ocultarError(errorActividad)    
    }
    
    //validavion de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')
    
    if (nivelEstudio == '') {
        mostrarError(nivelEstudio, 'Selecciona un nivel de estudio')
        validacionCorrecta = false  
    } else {
        ocultarError(errorNivelEstudio)
    }
    
    // validar los terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
    
    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar los terminos y condiciones')
        validacionCorrecta = false
    } else {
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta //el true en general, si alguno falló estó valdrá "FALSE"
}


const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}

// -- PRUEBAS
//---prueba para verificar que estoy obteniendo los valores desde el formulario.
let informacion = document.querySelectorAll('input[type="text"]');
console.log(informacion)


//Tuve un error, al traer las etiquetas del HTML de tipo texto
// el ID del div donde quería mostrar el error tenía un espacio, al ser un string no me lo tomaba, ;)
// just remember check twice the code ;)














