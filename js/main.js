//Modifica el contenido del textoMenu en relacion al item seleccionado  
function mostrar(texto){
    document.getElementById("textoMenu").innerHTML=texto;
}

//Resalta los elementos del menu al pasar el mouse sobre ellos.
function resaltar(palabra){
    document.getElementById(palabra).addEventListener("mouseover",function(){
        document.getElementById(palabra).style.color="#faead6";
    });
    document.getElementById(palabra).addEventListener("mouseout",function(){
        document.getElementById(palabra).style.color="#000000";
    })
}

var listaTexto={experiencias:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sapien mattis orci, vulputate pellentesque tortor:",
educacion:"Nullam ac educacion ligula. Ut ac erat lorem. Morbi mattis vehicula eros. Nulla tristique, nibh in ornare laoreet, ligula augue imperdiet nulla, vitae dictum nisl lacus quis ante. Aenean id accumsan urna. Quisque tristique faucibus ipsum id tristique. Suspendisse id lacus dolor. Quisque mauris justo, accumsan et ex eget, maximus fermentum erat. ",
interes:"Aenean intereses facilisis sapien, vel ultrices ipsum lacinia sit amet. Maecenas dolor ligula, blandit eget euismod id, vulputate pellentesque tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis tortor nibh, malesuada elementum. Praesent pretium mattis maximus. ",
informacion:"Nullam ac contacto ligula. Ut ac erat lorem. Morbi (417) 615-0110 vehicula eros. Nulla tristique, nibh in ornare laoreet, ligula augue imperdiet nulla, vitae dictum nisl lacus quis ante. Aenean urna email: dennis.sims@example.com"};
const presentacion = document.getElementById("textoMenu").innerHTML;

resaltar("presentacion");resaltar("interes");resaltar("educacion");resaltar("informacion");resaltar("experiencia");

document.getElementById("presentacion").addEventListener("click",function(){
    document.getElementById("textoMenu").innerHTML=presentacion;
});

document.getElementById("experiencia").addEventListener("click",function(){
    mostrar(listaTexto.experiencias);
})

document.getElementById("educacion").addEventListener("click",function(){
    mostrar(listaTexto.educacion);
});

document.getElementById("interes").addEventListener("click",function(){
    mostrar(listaTexto.interes);
});

document.getElementById("informacion").addEventListener("click",function(){
    mostrar(listaTexto.informacion);
});
