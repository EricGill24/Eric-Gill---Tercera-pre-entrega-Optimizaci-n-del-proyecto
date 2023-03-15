let carrito = [];
let total = 0;

// agregar items al "carrito"
function agregarProducto(nombre, precio){
    const producto ={
        nombre: nombre,
        precio: precio
    };

//agregar al carro, luego actualizar
carrito.push(producto);

const listaCarrito = document.getElementById("lista-carrito");
const elemento = document.createElement("li");
elemento.innerText = `${nombre} - ${precio}`;
listaCarrito.appendChild(elemento);

//actualizacion
total += precio;
const totalCarrito = document.getElementById("total-carrito");
totalCarrito.innerText = total.toFixed(2);
}
function finalizarCompra(){
    let total = document.getElementById("total-carrito").innerText; // valor del elemento con el ID 
    let fecha = new Date().toLocaleDateString();// Tenes la fecha del dia de compra
    localStorage.setItem("compra", "Total: " + total + " - Fecha: " + fecha); //Datos total con fecha almacenados en navegador local
-
-
-
-

-
Swal.fire({
    position: 'center',
    icon: 'success',
    title: '¡Gracias por tu compra!',
    showConfirmButton: false,
    timer: 1500
})

}











// alert con 3 botones
function uno() {
    
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        }
    })
}


//Guardado correctamente
function dos(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has ben saved',
        showConfirmButton: false,
        timer: 1500
    })
}
