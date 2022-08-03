import React, { useEffect, useState } from 'react'

export const Empleados = ({pagina}) => {

  const [empleados, setEmpleados] = useState([])

  useEffect(() => {
    conseguirEmpleados(pagina)
  }, [pagina])

  const conseguirEmpleados = async(p) => {
    const url = "https://reqres.in/api/users?page=1" +p
    const peticion = await fetch(url)
    const {data: empleados} = await peticion.json() 

    setEmpleados(empleados)

    console.log("Se ejecuto la peticion Ajax")
  }

  console.log("Se ha vuelto a renderizar empleados")

  return (
    <div>
        <ul className='empleados'>
          {empleados.length >= 1 && empleados.map(empleado => {
            return <li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
          })}
        </ul>
    </div>
  )

}
