// Importamos los archivos CSS
import './styles.css';

//Creamos una funcion para generar un numero aleatorio entre 1 y 6
function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
}

//Creamos una funcion para dibujar los dados
function dibujarDados(){
    //Obtenemos los dados
    const dados= document.querySelectorAll('.dado');

    //Generamos un numero aleatorio para cada dado
    for (let i=0; i< dados.length; i++){
        const dado=dados[i];

        //Cargamos la imagen del dado
        const imagen= document.createElement('img');
        imagen.src = `ing/dado-$(generar NumeroAleatorio()}.png`;
        
        //Agregamos la imagen al dado
        dado.appendChild(imagen);
    }
}

//Llamamos a la funcion para dibujar los dados
dibujarDados();

//Escuchamos el evento click en el boton
document.querySelector('lanzar').addEventListener('click' , () => {
    //Lanzamos los dados
    dibujarDados();
});