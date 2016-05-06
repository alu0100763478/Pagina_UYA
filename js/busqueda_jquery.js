function Buscar(){

  var cadena_entrada  = document.getElementById('destino').value;

  $("#lista_destino").empty();

$.getJSON("coches.json", function(objeto){

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

      }
    }

    if(vacio==true) alert("No hay viajes para el destino buscado. Cree una alerta o publique su viaje");

  });


}

function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ( !expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
      return false;
  }else
    return true;
}
