let resultado = 0;

const option = document.getElementById('option');
option.addEventListener('change',seleccionar);

const select = document.getElementById('select')
select.addEventListener('change',seleccionar);

const number = document.getElementById('numero');
number.addEventListener('input',seleccionar);



   function seleccionar(){
       
       let option = document.getElementById('option').value;
       let numero = document.getElementById('numero').value;
       let convertir = document.getElementById('select').value;
       console.log("aja")
        

        switch(option){
            case "cm":
                switch(convertir){
                    case "mm":resultado= numero * 10; document.getElementById("cambiar").innerHTML = resultado;break
                    case "mts":resultado= numero / 100; document.getElementById("cambiar").innerHTML = resultado;break
                    case "km":resultado= numero / 100000; document.getElementById("cambiar").innerHTML = resultado;break
                    default:resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break
                };
            break;

            case "mm":
                switch(convertir){
                    case "cm":resultado= numero /10; document.getElementById("cambiar").innerHTML = resultado;break
                    case "mts":resultado= numero / 1000; document.getElementById("cambiar").innerHTML = resultado;break
                    case "km":resultado= numero / 1000000; document.getElementById("cambiar").innerHTML = resultado;break
                    default:resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break
                };
            break;
            
            case "mts":
                switch(convertir){
                    case "cm":resultado= numero*100; document.getElementById("cambiar").innerHTML = resultado;break
                    case "mm":resultado= numero *1000; document.getElementById("cambiar").innerHTML = resultado;break
                    case "km":resultado= numero / 1000; document.getElementById("cambiar").innerHTML = resultado;break
                    default:resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break
                };
            break;

            case "km":
                switch(convertir){
                    case "cm":resultado= numero*100000; document.getElementById("cambiar").innerHTML = resultado;break
                    case "mm":resultado= numero * 1000000; document.getElementById("cambiar").innerHTML = resultado;break
                    case "mts":resultado= numero * 1000; document.getElementById("cambiar").innerHTML = resultado;break
                    default:resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break
                };
            break;

            default:console.log("seleccion medida valida");break;
        }
    }
