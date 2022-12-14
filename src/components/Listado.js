import React from 'react'
import Lista from './data.json';
import Item from './Item';
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
const arrayLista = Lista;

export default function Listado({contador}){


  return (
    <div className='container'>
          {
            arrayLista.map( info => {
              return(
            <Item 
            url= {info.url}
            key = {info.id}
            nombre= {info.producto.nombre}
            descripcion= {info.producto.descripcion}
            stock = {info.stock}
            contador={contador}
            />
            
              )
          }
            )
          }
    </div>
  
  )
}
 