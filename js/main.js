const input = document.getElementsByClassName("form-control");
const addBtn = document.getElementById("add")
const contCard = document.getElementById("cont-cards");
const form = document.getElementById("vehiculo-form")

function createCard(url, nombreA, marcaA, modeloA, kilometrajeA, precioA) {

    const cardPrincipal = document.createElement("div");
    cardPrincipal.classList.add("item-vehiculo", "col-md-6");

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
    nombre.textContent = nombreA;

    const marca = document.createElement("h4");
    marca.classList.add("card-subtitle","text-muted");
    marca.textContent = marcaA;

    const modelo = document.createElement("h4");
    modelo.classList.add("card-text");
    modelo.textContent = modeloA;

    const kilometraje = document.createElement("h4");
    kilometraje.classList.add("card-text");
    kilometraje.textContent = kilometrajeA;

    const precio = document.createElement("h2");
    precio.classList.add("text-success");
    precio.textContent = precioA;

    const acciones = document.createElement("div");
    acciones.classList.add("d-flex", "justify-content-between", "mt-3");

    const comprar = document.createElement("button");
    comprar.classList.add("btn", "btn-success");
    comprar.textContent = "Comprar";

    const eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-danger");
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

    const url = document.getElementById("foto").value.trim();
    const nombreA = document.getElementById("nombre").value.trim();
    const marcaA = document.getElementById("marca").value.trim();
    const modeloA = document.getElementById("modelo").value.trim();
    const kilometrajeA = document.getElementById("kilometraje").value.trim();
    const precioA = document.getElementById("precio").value.trim();

    if (url.value === "" ||
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
        form.reset();
    }



});

