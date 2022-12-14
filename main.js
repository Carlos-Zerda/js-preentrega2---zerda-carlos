/** CONTROL DE VENCIMIENTOS**/

class producto{
    constructor(familia,codigo,descripcion,cantidad,vencimiento){
        this.familia=familia,
        this.codigo=codigo,
        this.descripcion=descripcion,
        this.cantidad=cantidad,
        this.vencimiento=vencimiento
    }
}

const arrayProductos=[]

let inicio=parseInt(prompt("Bienvenido, por favor ingrese la opcion deseada: \n 1) Ingresar un nuevo producto \n 2) consultas"))

while (inicio===1){
    let productoNuevo = new producto( prompt("ingrese la familia a la que pertenece el producto"), prompt("ingrese el codigo del producto"),prompt("ingrese la descripcion del producto"),prompt("ingrese la cantidad de unidades"),prompt("ingrese el vencimiento"));
    arrayProductos.push(productoNuevo);
    alert("Producto nuevo creado!");
    inicio=parseInt(prompt("Bienvenido, por favor ingrese la opcion deseada: \n 1) Ingresar un nuevo producto \n 2) consultas de stock"));
}

console.log(arrayProductos)

while (inicio===2){
    let consultas=parseInt(prompt("seleccione el tipo de consulta: \n 1)Existencia total \n 2) Buscar stock por familia \n 3) Buscar stock por codigo \n 4) Buscar por descripcion \n 5) Trabajar con cantidades \n 6) Trabajar con fechas \n 7) Volver al menu anterior"))
        if(consultas===7){
            
            inicio=parseInt(prompt("Bienvenido, por favor ingrese la opcion deseada: \n 1) Ingresar un nuevo producto \n 2) consultas de stock"))
            while (inicio===1){
                let productoNuevo = new producto( prompt("ingrese la familia a la que pertenece el producto"), prompt("ingrese el codigo del producto"),prompt("ingrese la descripcion del producto"),prompt("ingrese la cantidad de unidades"),prompt("ingrese el vencimiento"));
                arrayProductos.push(productoNuevo);
                alert("Producto nuevo creado!");
                inicio=parseInt(prompt("Bienvenido, por favor ingrese la opcion deseada: \n 1) Ingresar un nuevo producto \n 2) consultas de stock"));
            }
        }
}


/* 

let inicio= parseInt( prompt("Bienvenido a nuestro programa de control de stock, Por favor selecciona una opcion:  \n 1) Login \n 2) Registrarse"));

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
 */








