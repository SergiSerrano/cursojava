/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            
            function evaluacion (form){   //funcion para saber si has introducido nombre y pass
               
          if (form.nombre.value == ""){
                alert ("Introduce un usuario");
                form.nombre.focus();
                return (false);
          }
          
          if (form.password.value == ""){
              alert("Introduce una contraseña");
              form.password.focus();
              return (false);
          }
          
          alert ("Has introducido los datos correctamente");
          return (true);
          

            }



