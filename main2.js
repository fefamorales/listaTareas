// llamo al input
var input = document.getElementById('box');
// llamo a la lista
var lista = document.getElementById('lista');
// llamo al boton
var button = document.getElementById('add');
// creo el aray tareas
//var tareas = []; 
// creo la funcion que agrega las tareas al array
function addTarea(tarea){
    var f = new FormData();
    f.append('name', tarea)
    //tareas.push(tarea);
    //renderList();
    fetch('http://localhost:5000/create', {
        method: 'POST',
        body: f
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => { 
        renderList(response);
    })
}

function removeTarea(tarea){
    fetch('http://localhost:5000/delete/' +  tarea, {
        method: 'DELETE'
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => { 
        //renderList(response);
    })
}
// aqui va la funcion que renderiza la lista de tareas
function renderList(tareas){
    // seteo la lista del html (armo el html)
    lista.innerHTML = '';
    // recorro el array 
    tareas.forEach(function(item,i){
        // creo los li
        let li = document.createElement('li');
        // creo la etiqueta span donde va el boton de eliminar
        let del = document.createElement('span');
        // creamos la etiqueta span donde va el texto
        let text = document.createElement('span');
        // creao el boton de eliminar
        let btn = document.createElement('button');
        // le asigno un valor
        text.innerHTML = item.name;
        btn.innerHTML = "x";
        btn.classList.add('btn-delete');

        btn.addEventListener('click', function(){
            removeTarea(item['_id']);
            tareas.splice(tareas.indexOf(item),1);
            renderList(tareas);
        })
        li.appendChild(btn);
        li.appendChild(text);
        // insertamos la etiqueta en el DOM
        lista.appendChild(li);
    });
}


button.addEventListener('click', function(){
    addTarea(input.value);
})

document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5000/find', {
        method: 'GET',
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => { 
        renderList(response);
    })
})



