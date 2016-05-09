function Buscar(){

  var cadena_entrada  = document.getElementById('destino').value;

  $("#lista_destino").empty();
  
    //
    ajax_url="coches.json"
  
    // Creamos un nuevo objeto encargado de la comunicación
    var ajax_peticion = new XMLHttpRequest();

    if(ajax_peticion){
        ajax_peticion.open( "POST", ajax_url, true );
        ajax_peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax_peticion.send(ajax_url);
        
        ajax_peticion.onreadystatechange = function()
        {

          // readyState es 4
          if (ajax_peticion.readyState == 4 )
          {
      
              // Analizaos el responseText que contendrá el JSON enviado desde el servidor
              var objeto = JSON.parse( ajax_peticion.responseText );
              // La variable jsonObj ahora contiene un objeto con los datos recibidos

                  vacio = true;
                  for( var i=0; i< objeto.coches.length; i++){
                    for( var j=0; j< objeto.coches[i].viajes_rutina.length; j++){
              
                    console.log("¿ ",cadena_entrada," = ",objeto.coches[i].viajes_rutina[j]," ?");
              
                      if(cadena_entrada == objeto.coches[i].viajes_rutina[j]){
              
                       $("#lista_destino").append("<p>"
                       + "Usuario: " + objeto.coches[i].nombre_usuario + "<br>"
                       + "Modelo del coche: " + objeto.coches[i].modelo + "<br>"
                       +"Valoracion de otros usuarios: " + objeto.coches[i].valoracion + "<br>"
                       +"Preferencias del conductor: " + "<br>"
                       +"<li>" + "Fumar: " + objeto.coches[i].opciones[0].fumar
                       +"<li>" + "Comer: " + objeto.coches[i].opciones[0].comer
                       +"<li>" + "Vehículo adaptado: " + objeto.coches[i].opciones[0].adaptado
                       +"<li>" + "Mascotas: " + objeto.coches[i].opciones[0].mascotas);
              
                       vacio = false;
                     }
          
              
                  if(vacio==true) alert("No hay viajes para el destino buscado. Cree una alerta o publique su viaje");
              
                    }
                  }
            
          }
        }
      }
}      

// http://cybmeta.com/ajax-con-json-y-php-con-javascript-puro