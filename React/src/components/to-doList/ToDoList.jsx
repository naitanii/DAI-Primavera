import {useState} from "react";
import{SingleTask} from "./SingleTask";



export function ToDoList(){


    const [tareas, setTareas] = useState([
        {
            id: 1,
            texto: "Estudiar React",
            colorFondo: "lightblue",
            estaCompleta: false
        },
        {
            id: 2,
            texto: "Hacer tararea de componentes",
            colorFondo: "lightpink",
            estaCompleta: false
        },
        {
            id: 3,
            texto: "pilates a las 6pm",
            colorFondo: "lightpurple",
            estaCompleta: true
        },
        {
            id: 4,
            texto: "regar plantas",
            colorFondo: "lightgreen",
            estaCompleta: false
        },
        {
            id: 5,
            texto: "meditar 30 minutos",
            colorFondo: "lightred",
            estaCompleta: true
        }
    ]);
    const onCompletarTarea = (id) => {
        const nuevasTareas = tareas.map((tarea)=>{
            if(tarea.id===id){
                return{
                    ...tarea,
                    estaCompleta: !tarea.estaCompleta
                };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };
    return(
        <div
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
            fontFamily: "Arial"
        }}
        >
            <h1> Lista de tareas por hacer</h1>

            {tareas.map((tarea)=>(
                <SingleTask
                key = {tarea.id}
                texto={tarea.texto}
                colorFondo={tarea.colorFondo}
                estaCompleta={tarea.estaCompleta}
                onCompletar={()=>onCompletarTarea(tarea.id)}
                />
            ))}
        </div>
    );
}