/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function evaluacion(form){
    
                                
                  if (form.nombre.value == ""){ //comprueba si has escrito algo en nomnbre
                     alert("Por favor, introduce tu nombre");
                     form.nombre.focus(); 
                     return (false);  
                 }
                 
                 if (form.apellidos.value == ""){ //comprueba si has escrito algo en apellidos
                     alert("Por favor, introduce tus apellidos");
                     form.apellidos.focus(); 
                     return (false);   
                 }
                 
                 if (form.dni.value == ""){ //comprueba si has escrito algo en DNI
                     alert("Por favor, introduce tu DNI");
                     form.dni.focus(); 
                     return (false);  
                 }
                 
                 if (form.edad.value == ""){ //comprueba si has escrito algo en edad
                     alert("Por favor, introduce tu edad");
                     form.edad.focus(); 
                     return (false);  
                 }
                 
                 if (form.sexo.value == "X"){ //comprueba si has marcado hombre o mujer
                     alert("Por favor, introduce tu sexo");
                     form.sexo.focus(); 
                     return (false);  
                 }
                 
                 if (form.pelicula.value == "11" || form.pelicula.value =="22" || form.pelicula.value=="33"){ //comprueba si marcado algo en pelicula
                     
                 }else{
                     alert("Por favor, introduce tu pelicula favorita");
                     return (false);  
                 }
                 
                 if (form.rio.checked || form.tren.checked || form.solo.checked || form.mision.checked || form.sargento.checked){ //comprueba si hay algo marcado en peliculas vistas
                     
                 }else{
                     alert("Por favor, marca mínimo 1 película que no hayas visto");
                     return (false);
                 }
                 
                 if (form.argumento.value == ""){ //comprueba si has escrito algo en argumento
                     alert("Por favor, introduce el argumento de tu pelicula favorita");
                     form.argumento.focus(); 
                     return (false);  
                 }


                  alert ("Has introducido los datos correctamente");
                  return (true);

            }
