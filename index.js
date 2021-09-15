function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='';
    document.getElementById("Input5").value='Accion';
    document.getElementById("Input6").value='';
    document.getElementById("Input7").value='';
    document.getElementById("Input8").value='';
    document.getElementById("Input9").value='';

}

function createR() {
    
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var titulo = document.getElementById("Input2").value;
    var lanzamiento = document.getElementById("Input3").value;
    var duracion= document.getElementById("Input4").value;
    var genero = document.getElementById("Input5").value;
    var reparto = document.getElementById("Input6").value;
    var director = document.getElementById("Input7").value;
    var guion = document.getElementById("Input8").value;
    var sinopsis = document.getElementById("Input9").value;

    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var pelicula = {
            id, //matricula:id    id:id
            titulo,//nombre:nombre
            lanzamiento,
            duracion,
            genero,
            reparto,
            director,
            guion,
            sinopsis,
        }

        var lista_peliculas=JSON.parse(localStorage.getItem("Peliculas"));

        if(lista_peliculas==null)
        { 
            var lista_peliculas = [];
        }
        
        const existe = lista_peliculas.some(element=>element.id==id); 

        if(!existe||document.getElementById("Input1").disabled==true)
        {
            
            if(document.getElementById("Input1").disabled==true)
            {
                var lista_peliculas=lista_peliculas.filter(pelicula=>pelicula.id!=id);

            }
                
            lista_peliculas.push(pelicula);
            var temporal = lista_peliculas.sort((a,b) => a.id-b.id);
            localStorage.setItem("Peliculas", JSON.stringify(temporal));
            
            read();
            resetFields();
            swal("Listo!", "Agregado correctamente", "success");

        }
        else
        {
            swal("Error", "Ya existe ese id de pelicula","warning");
        }

    } 
    else 
    {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
    
}

function read(){
    document.getElementById("Table1").innerHTML='';
    

    const lista_peliculas = JSON.parse(localStorage.getItem("Peliculas"));
    
     
    if(lista_peliculas)
    {
        lista_peliculas.forEach((pelicula)=>printRow(pelicula));
    }
}


function printRow(pelicula){
    
    if(pelicula!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);

        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = pelicula.id;
        cell2.innerHTML = pelicula.titulo; 
        cell3.innerHTML = pelicula.lanzamiento
        cell4.innerHTML = pelicula.duracion;
        cell5.innerHTML = pelicula.genero 
        cell6.innerHTML = pelicula.reparto; 
        cell7.innerHTML = pelicula.director;
        cell8.innerHTML = pelicula.guion; 
        cell9.innerHTML = pelicula.sinopsis;  
        cell10.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${pelicula.id})">Eliminar</button>`;
        cell11.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+pelicula.id+')">Modificar</button>';
    }
}

function deleteR(id){
    const lista_peliculas = JSON.parse(localStorage.getItem("Peliculas"));
    var temporal=lista_peliculas.filter(pelicula=>pelicula.id!=id);
    localStorage.setItem("Peliculas", JSON.stringify(temporal));

    if(temporal.length==0)
    { 
        localStorage.removeItem("Peliculas");
    }
  
    read();
    
}

function seekR(id){

    const lista_peliculas = JSON.parse(localStorage.getItem("Peliculas"));
    var pelicula=lista_peliculas.filter(pelicula=>pelicula.id==id);
    //console.log(pelicula[0]);
    updateR(pelicula[0]);
}

function updateR(pelicula){
    if(pelicula!=null)
    {
        document.getElementById("Input1").value=pelicula.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=pelicula.titulo;
        document.getElementById("Input3").value=pelicula.lanzamiento;
        document.getElementById("Input4").value=pelicula.duracion;
        document.getElementById("Input5").value=pelicula.genero;
        document.getElementById("Input6").value=pelicula.reparto;
        document.getElementById("Input7").value=pelicula.director;
        document.getElementById("Input8").value=pelicula.guion;
        document.getElementById("Input9").value=pelicula.sinopsis;
    }
}


//Para consulta de genero
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;
  
    const lista_peliculas = JSON.parse(localStorage.getItem("Peliculas"));
    var peliculasC=lista_peliculas.filter(pelicula=>pelicula.genero==c);
    if(peliculasC)
    {
        peliculasC.forEach((pelicula)=>printRowQ(pelicula));
    }
    //console.log(peliculasC)

}


function printRowQ(pelicula){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
    
    //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = pelicula.id;
        cell2.innerHTML = pelicula.titulo; 
        cell3.innerHTML = pelicula.lanzamiento
        cell4.innerHTML = pelicula.duracion;
        cell5.innerHTML = pelicula.genero 
        cell6.innerHTML = pelicula.reparto; 
        cell7.innerHTML = pelicula.director;
        cell8.innerHTML = pelicula.guion; 
        cell9.innerHTML = pelicula.sinopsis; 
   
}