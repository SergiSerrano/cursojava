/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Introducir_Datos(){
   
    //PERMITIMOS ESCRIBIR
    document.getElementById("codigo").readOnly=false;
    document.getElementById("descripcion").readOnly=false;
    document.getElementById("importe").readOnly=false;
    
    //LIMPIAMOS PARAMETROS
    document.getElementById("codigo").value="";
    document.getElementById("descripcion").value="";
    document.getElementById("importe").value="";
    
    //PONEMOS FOCO EN EL PRIMER CAMPO
    formulario.codigo.focus();
    
    //DESBLOQUEAMOS BOTONES
    document.getElementById("boton1").disabled=false;
    document.getElementById("boton2").disabled=false;
    document.getElementById("boton3").disabled=false;
    document.getElementById("boton4").disabled=false;
    
}
function grabar(){
    
            
    
    codigo = document.getElementById("codigo").value;
    descripcion = document.getElementById("descripcion").value;
    importe= document.getElementById("importe").value;
    
    matrizcodigo.push(codigo);
    matrizdescripcion.push(descripcion);
    matrizimporte.push(importe);
    
    //LIMPIAMOS PARAMETROS
    document.getElementById("codigo").value="";
    document.getElementById("descripcion").value="";
    document.getElementById("importe").value="";
    
    //PONEMOS FOCO EN EL PRIMER CAMPO
    formulario.codigo.focus();
    
}

function Mostrar_Valor(){
    /*for (var i=0; i<matrizcodigo.length;i++){
        document.write(matrizcodigo[i] + " " + matrizdescripcion[i] + " " + matrizimporte[i] + "<br/>");
       
        
    }
    */
    
    //MOSTRAMOS TABLA
    
    
    
   
  
    var tabla= "<table><tr><th>CODIGO</th><th>DESCRIPCION</th><th>IMPORTE</th></tr>";
    

  for (var i=0; i<matrizcodigo.length; i++) {
      
    tabla+="<tr><td>"+ matrizcodigo[i] + "</td>";
    tabla+="<td>" + matrizdescripcion[i] + "</td>";
    tabla+="<td>" + matrizimporte[i] + "</td></tr>";
  }  
  
   tabla+="</table>";
   
   
   document.getElementById('contenedor').innerHTML = tabla;
    
}

function Salir(){
    
}