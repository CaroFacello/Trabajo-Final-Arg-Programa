
function validar(){
    const nombre=document.getElementById("nombre").value;
    
    const email=document.getElementById("email").value;

    const telefono=document.getElementById("telefono").value;
    
    if(nombre.length>0 && telefono>0 && email.length>0){
        console.log("Mensaje enviado con exito");
        alert("Mensaje enviado con exito");   
    } 
    else{
        console.log("Mensaje no enviado. Por favor completar los datos correspondientes");
        alert("Mensaje no enviado. Por favor completar los datos correspondientes");   
    }
}
