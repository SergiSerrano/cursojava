/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Boton01(){
                
                var nombre = prompt("Introduce el nombre");
                var edad = prompt("Introduce la edad");
                
                if (edad>18){
                    
                    document.write("Nombre: " + nombre);
                    document.write("<br/>Edad: " + edad + " años.");
                }else{
                    
                    document.write("No puedes entrar");
                }
                
            }
            
            function Boton02(){
                
                var matrizNombre = new Array();
                var matrizSueldo = new Array();
               
                
                for (var i=0; i<5; i++){
                    
                    var numeroPersona = i+1;
                    
                    matrizNombre[i] = prompt("Introduce nombre persona nº: " + numeroPersona);
                    matrizSueldo[i] = prompt("Introduce sueldo persona nº: " + numeroPersona);
                    
                    while (matrizSueldo[i]>3000){
                        
                        alert("El sueldo no puede ser superior a 3000");
                        matrizSueldo[i]=prompt("Introduce sueldo persona nº: " + numeroPersona);
                    }
                    
                    
                }
                for (var j=0; j<5; j++){
                    
                    
                    document.write("Nombre Persona: " + matrizNombre[j] + " ---------- " + "Sueldo : " + matrizSueldo[j] + " Euros.");
                    document.write("<br/><br/>");
                }
                //Aqui imprimiremos todas las dos matrices.
                
            }
            
            function Boton03(){
                
                
                var matriznumeros = new Array();
                var auxiliar;
                
                for(var i=0; i<5;i++){ //introducir numeros en la matriz
                    
                    matriznumeros[i] = prompt("Introduce un numero");
                    
                }
                
                for (var a=0; a<5; a++){ //ordenar numeros de la matriz
                    
                    
                    
                    for (var b=0;b<5;b++){
                        
                        
                        if (matriznumeros[b] > matriznumeros[a]){
                            
                            auxiliar = matriznumeros[a];
                            matriznumeros[a] = matriznumeros[b];
                            matriznumeros[b] = auxiliar;
                            
                            
                        }
                    }
                    
                    
                }
                
                for (var c=0;c<5;c++){
                    
                    document.write(matriznumeros[c] + " ");
                    
                }
            }
            
