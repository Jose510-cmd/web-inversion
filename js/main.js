    //RECOPILAR LA INFORMACIÓN DEL USUARIO

function simulador (){

    const campoNombre = document.getElementById('nombres').value
    const campoTelefono = document.getElementById('telefono').value
    const campoEmail = document.getElementById('email').value
    const campoMonto = parseInt(document.getElementById('inversion').value)
    const campoTiempo = parseInt(document.getElementById('tiempo').value)
    const contPre = document.getElementById('pre')
    const contPost = document.getElementById('post')
    const showTiempo = document.getElementById('tiempo-show')
    const showInt = document.getElementById('interes-show')
    const notNombres = document.getElementById('nombres-show')
    const notEmail = document.getElementById('email-show')
    const showGanancia = document.getElementById('ganancia-show')
    const showTotal = document.getElementById('total-show')

    //ESTO SIRVE PARA QUE LA IMAGEN PASE A LO QUE NECESITAMOS VER DEL RESULTADO DEL FORMULARIO

    contPost.classList.remove('disabled')
    contPre.classList.add('disabled')
    
    //ESTO SIRVE PARA QUE LA NOTIFICACIÓN DE ABAJO DEL TOTAL RECIBIDO GUARDE EL NOMBRE Y EL EMAIL QUE PUSIMOS EN EL FORMULARIO

    notNombres.innerText = campoNombre
    notEmail.innerText = campoEmail

    //ESTO SIRVE PARA QUE EN EL RESULTADO DEL FORMULARIO PONGA LOS NOMBRES Y APELLIDOS QUE PUSIMOS EN EL FORMULARIO

    notNombres.innerText = campoNombre
    notEmail.innerText = campoEmail

    // Determinar la tasa de interés según el período de inversión
    let interes = 0
    let total = 0


    //ESTO SIRVE PARA QUE A LA HORA DE EJEGIR EL TIEMPO DE INVERSION PUES CAMBIE A LA ELECCION QUE DESEAMOS ELEGIR

    switch (campoTiempo) {
        case 1:
            showTiempo.innerText = '12 Meses'
            showInt.innerText = '0.8%'
            interes = (campoMonto * 0.008)*12
            total = campoMonto + interes
            showGanancia.innerText = interes
            showTotal.innerText = total
            break;
        
        case 2:
            showTiempo.innerText = '24 Meses'
            showInt.innerText = '1.3%'
            interes = (campoMonto * 0.013)*24
            total = campoMonto + interes
            showGanancia.innerText = interes
            showTotal.innerText = total
            break;

        case 3:
            showTiempo.innerText = '36 Meses'
            showInt.innerText = '1.7%'
            interes = (campoMonto * 0.017)*36
            total = campoMonto + interes
            showGanancia.innerText = interes
            showTotal.innerText = total
           break;
    
        default:
            break;
    }
}

const boton = document.getElementById('simulador-btn')

boton.addEventListener('click',simulador)