/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Cventana01(){
    
    ventana=window.parent.self;
    ventana.opener=window.parent.self;
    ventana.close();
}

function Eliminar01(){
    
    //VACIAR CAMPOS
    document.Formulario01.nombre.readOnly=false;
    document.getElementById('nombre').value="";
    document.Formulario01.apellidos.readOnly=false;
    document.getElementById('apellidos').value="";
    document.Formulario01.profesion.readOnly=false;
    document.getElementById('profesion').value="";
    document.Formulario01.edad.readOnly=false;
    document.getElementById('edad').value="";
    document.Formulario01.EntidadB.readOnly=false;
    document.getElementById('entidad').value="";
    document.Formulario01.TipoCliente.readOnly=false;
    document.getElementById('Tclientes').value="";
    
    //BOTONES
    document.getElementById('eli01i').disabled=true;
    document.getElementById('eli02i').disabled=true;
    document.getElementById('eli03i').disabled=true;
    document.getElementById('eli05i').disabled=true;
    document.getElementById('eli06i').disabled=true;
    document.getElementById('eli07i').disabled=true;
    document.getElementById('eli04i').disabled=false;
    
    //BLOQUEAR CAMPOS
    document.Formulario01.nombre.readonly=true;
    document.Formulario01.apellidos.readonly=true;
    document.Formulario01.profesion.readonly=true;
    document.Formulario01.edad.readonly=true;
    document.Formulario01.EntidadB.readonly=true;
    document.Formulario01.TipoCliente.readonly=true;
    
  
}


function Grabar01(){
    
    //BLOQUEAR CAMPOS
    document.Formulario01.nombre.readOnly=true;
    document.Formulario01.apellidos.readOnly=true;
    document.Formulario01.nombre.readOnly=true;
    document.Formulario01.apellidos.readOnly=true;
    document.Formulario01.profesion.readOnly=true;
    document.Formulario01.edad.readOnly=true;
    document.Formulario01.EntidadB.readOnly=true;
    document.Formulario01.TipoCliente.readOnly=true;
    
    
    //BOTONES
    document.getElementById('eli01i').disabled=false;
    document.getElementById('eli02i').disabled=false;
    document.getElementById('eli03i').disabled=false;
    document.getElementById('eli04i').disabled=true;
    document.getElementById('eli05i').disabled=false;
    document.getElementById('eli06i').disabled=false;
    document.getElementById('eli07i').disabled=false;
    
}

function Modificar01(){
    
    //DESBLOQUEAR CAMPOS
    document.Formulario01.nombre.readOnly=false;
    document.Formulario01.apellidos.readOnly=false;
    document.Formulario01.nombre.readOnly=false;
    document.Formulario01.apellidos.readOnly=false;
    document.Formulario01.profesion.readOnly=false;
    document.Formulario01.edad.readOnly=false;
    document.Formulario01.EntidadB.readOnly=false;
    document.Formulario01.TipoCliente.readOnly=false;
    
    //PONER PUNTERO EN PRIMER CAMPO
    document.Formulario01.nombre.focus();
    
    //BOTONES
    document.getElementById('eli01i').disabled=true;
    document.getElementById('eli02i').disabled=true;
    document.getElementById('eli03i').disabled=true;
    document.getElementById('eli04i').disabled=false;
    document.getElementById('eli05i').disabled=true;
    document.getElementById('eli06i').disabled=true;
    document.getElementById('eli07i').disabled=true;
}

function Aventana01(){
    
}

function Nuevos01(){

    //DESBLOQUEAR CAMPOS
    document.Formulario01.nombre.readOnly=false;
    document.Formulario01.apellidos.readOnly=false;
    document.Formulario01.nombre.readOnly=false;
    document.Formulario01.apellidos.readOnly=false;
    document.Formulario01.profesion.readOnly=false;
    document.Formulario01.edad.readOnly=false;
    document.Formulario01.EntidadB.readOnly=false;
    document.Formulario01.TipoCliente.readOnly=false;
    
    //VACIAR CAMPOS
    document.getElementById('nombre').value="";
    document.getElementById('apellidos').value="";
    document.getElementById('profesion').value="";
    document.getElementById('edad').value="";
    document.getElementById('entidad').value="";
    document.getElementById('Tclientes').value="";
    
    //PONER PUNTERO EN PRIMER CAMPO
    document.Formulario01.nombre.focus();
    
    //BOTONES
    document.getElementById('eli01i').disabled=true;
    document.getElementById('eli02i').disabled=true;
    document.getElementById('eli03i').disabled=true;
    document.getElementById('eli04i').disabled=false;
    document.getElementById('eli05i').disabled=true;
    document.getElementById('eli06i').disabled=true;
    document.getElementById('eli07i').disabled=false;
    
    
  
   
   
    

    
    
    
    
    
}
