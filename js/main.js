const input = document.getElementsByClassName("form-control");
const contCard = document.getElementById("cont-cards-fila");
const form = document.getElementById("vehiculo-form")
const contCarrito = document.getElementById("cont-productos");

function createCard(url, nombreA, marcaA, modeloA, kilometrajeA, precioA) {

    const cardPrincipal = document.createElement("div");
    cardPrincipal.classList.add("item-vehiculo", "col-md-6", "col-sm-6", "col-lg-6");

    const cardSecundaria = document.createElement("div");
    cardSecundaria.classList.add("card", "h-100");

    const img = document.createElement("img")
    img.classList.add("card-img-top", "w-100");
    img.setAttribute("src", url);
    img.setAttribute("alt", "Foto vehículo");

    const contInfo = document.createElement("div");
    contInfo.classList.add("card-body");

    const nombre = document.createElement("h3");
    nombre.classList.add("card-title");
    nombre.setAttribute("id", "nombre")
    nombre.textContent = nombreA;

    const marca = document.createElement("h4");
    marca.classList.add("card-subtitle","text-muted");
    marca.textContent = marcaA;

    const modelo = document.createElement("h4");
    modelo.classList.add("card-text");
    modelo.textContent = "Modelo: " + modeloA;

    const kilometraje = document.createElement("h4");
    kilometraje.classList.add("card-text");
    kilometraje.textContent = "Kilometraje: " + kilometrajeA;

    const precio = document.createElement("h2");
    precio.classList.add("text-success");
    precio.textContent = "$" + precioA;

    const acciones = document.createElement("div");
    acciones.classList.add("d-flex", "justify-content-between", "mt-3");

    const comprar = document.createElement("button");
    comprar.classList.add("btn", "btn-success");
    comprar.setAttribute("id", "comprar")
    comprar.textContent = "Comprar";

    const eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-danger");
    eliminar.setAttribute("id", "eliminar")
    eliminar.textContent = "Eliminar";

    //ENSAMBLAMOS DENTRO DEL NODO PADRE SUS NODOS HIJOS, ES DECIR LA ESTRUCTURA DE LA TAREA

    cardPrincipal.appendChild(cardSecundaria);
    cardSecundaria.appendChild(img);
    cardSecundaria.appendChild(contInfo);
    contInfo.appendChild(nombre);
    contInfo.appendChild(marca);
    contInfo.appendChild(modelo)
    contInfo.appendChild(kilometraje);
    contInfo.appendChild(precio);
    contInfo.appendChild(acciones);
    acciones.appendChild(comprar);
    acciones.appendChild(eliminar);

    //UTILIZAMOS EL RETURN PARA DAR RESPUESTA DEL ELEMENTO CREADO YA QUE LO USAREMOS EN OTRA FUNCION MAS ADELANTE

    return cardPrincipal;

}

//DETECTAMOS EL EVENTO SUBMIT SOBRE EL BOTON AGREGAR CON UN ELEMENTO DE ESCUCHA (listener) 
//PARA QUE APARTIR DE ESTE EVENTO SE AGREGUE LA TAREA DENTRO DEL CONTENEDOR cont-cards

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let url = document.getElementById("foto").value.trim();
    const nombreA = document.getElementById("nombre").value.trim();
    const marcaA = document.getElementById("marca").value.trim();
    const modeloA = document.getElementById("modelo").value.trim();
    const kilometrajeA = document.getElementById("kilometraje").value.trim();
    const precioA = document.getElementById("precio").value.trim();

    // Foto por defecto si el campo viene vacío
    if (url === "") {
        url = "img/defecto.heif";
    }

    if (
    nombreA.value === "" ||
    marcaA.value === "" ||
    modeloA.value === "" ||
    kilometrajeA.value === "" ||
    precioA.value === "") {
        alert("Complete todos los campos para el registro del vehiculo por favor");
    }
    else{
        const newCard = createCard(url, nombreA, marcaA, modeloA, kilometrajeA, precioA);
        contCard.appendChild(newCard);
        eventsCars(newCard);
        form.reset();
        
    }



});

function eventsCars(cardPrincipal) {
    const btnComprar = cardPrincipal.querySelector("#comprar");
    const btnDelete = cardPrincipal.querySelector("#eliminar");
    let nombreV = cardPrincipal.querySelector("#nombre").textContent;
    let url = cardPrincipal.querySelector("img").getAttribute("src");
    let marca = cardPrincipal.querySelector(".text-muted").textContent;
    let precio = cardPrincipal.querySelector(".text-success").textContent; 

    btnComprar.addEventListener('click', (e) => {

        e.preventDefault();

        alert("Has comprado el vehiculo " + nombreV + "\nGracias por su compra!!!! ");
        

        const newProducto = CreateProducto(url, nombreV, marca, precio);
        contCarrito.appendChild(newProducto);
        actualizarTotal(precio);
        deleteProductoCarrito(newProducto);


    });

    btnDelete.addEventListener("click", () => {
        cardPrincipal.remove();
    });

}


function modalProductos(){
    let selector = document.getElementById("panel-carrito")

    selector.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() { 
document.getElementById('carrito').addEventListener('click', modalProductos);
});

function CreateProducto(url, nombreV, marca, precio) {
    
    const carritoPrincipal = document.createElement("div");
    carritoPrincipal.classList.add("productos-card");

    const carritoFila = document.createElement("div");
    carritoFila.classList.add("row");

    const colCarrito1 = document.createElement("div");
    colCarrito1.classList.add("col-lg-4","col-md-4","col-carrito1");

    const imgCarrito = document.createElement("img");
    imgCarrito.classList.add("w-100");
    imgCarrito.setAttribute("alt", "Foto vehículo");
    imgCarrito.setAttribute("src", url);

    const colCarrito2 = document.createElement("div");
    colCarrito2.classList.add("col-lg-6","col-md-6","col-carrito2");

    const h3Nombre = document.createElement("h3");
    h3Nombre.classList.add("card-title");
    h3Nombre.textContent = nombreV;

    const h4Marca = document.createElement("h4");
    h4Marca.classList.add("card-subtitle", "text-muted");
    h4Marca.textContent = marca;

    const h3Precio = document.createElement("h3");
    h3Precio.classList.add("text-success");
    h3Precio.textContent = precio;


    const colCarrito3 = document.createElement("div");
    colCarrito3.classList.add("col-lg-2","col-md-2","col-carrito3");

    const btndelete = document.createElement("button");
    btndelete.classList.add("btn", "btn-danger");
    btndelete.setAttribute("id", "eliminar-carrito");
    btndelete.textContent = "X";


    carritoPrincipal.appendChild(carritoFila);
    carritoFila.appendChild(colCarrito1);
    colCarrito1.appendChild(imgCarrito);
    carritoFila.appendChild(colCarrito2);
    colCarrito2.appendChild(h3Nombre);
    colCarrito2.appendChild(h4Marca);
    colCarrito2.appendChild(h3Precio);
    carritoFila.appendChild(colCarrito3)
    colCarrito3.appendChild(btndelete);

    return carritoPrincipal


}



function deleteProductoCarrito(carritoPrincipal) {

    const btnDelete = carritoPrincipal.querySelector("#eliminar-carrito");

    btnDelete.addEventListener("click", () => {
        carritoPrincipal.remove();
    });
    
}


//suma de total

let totalCarrito = 0;

