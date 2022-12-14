/** CONTROL DE VENCIMIENTOS**/

class producto{
    constructor(codigo,descripcion,cantidad,vencimiento){
        this.codigo=codigo,
        this.descripcion=descripcion,
        this.cantidad=cantidad,
        this.vencimiento=vencimiento
    }
}

const arrayProductos=[]

function crearArticulos(codigo,descripcion,cantidad,vencimiento){
    let codigoIngreso = prompt("ingrese el codigo del producto");
    let descripcionIngreso =prompt("ingrese la descripcion del producto");
    let cantidadIngreso =prompt("ingrese la cantidad de unidades");
    let vencimientoIngreso =prompt("ingrese el vencimiento");
    return{
        
    }
}


let inicio= parseInt( prompt("Bien venido a nuestro programa de control de stock, Por favor selecciona una opcion:  \n 1) Login \n 2) Registrarse"));

if(inicio===2){
    let usuarioNuevo=new persona(prompt("Ingrese su nuevo Usuario"),prompt("Ingrese su Contraseña"));
    arraypersona.push(usuarioNuevo);
    alert("Usuario registrado existosamente");
    alert(inicio)
    }

else{
    for(let i =0;i<3;i++)
    if(inicio===1){
        let ingreseUsuario=prompt("Ingrese su Usuario");
        let ingreseContrasena=prompt("Ingrese su Contraseña");
        if(ingreseUsuario===persona.usuario && ingreseContrasena===persona.contrasena){
            alert("bienvenido "+persona.usuario)
        }
    }
}
console.log(arraypersona)









