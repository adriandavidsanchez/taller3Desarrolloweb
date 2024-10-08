import React, { useEffect, useState } from 'react';
import './TablaEmpleado.css';

const TablaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  
  useEffect(() => {
    fetch('/EMPLEDO.json')
      .then((response) => response.json())
      .then((data) => setEmpleados(data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  
  const empleadosFiltrados = empleados.filter((empleado) =>
    `${empleado.nombre} ${empleado.cargo} ${empleado.departamento} ${empleado.salario}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="tablaempleados">
      <h1>Lista de Empleados</h1>
      <input
        type="text"
        placeholder="Buscar empleados."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Salario</th>
          </tr>
        </thead>
        <tbody>
          {empleadosFiltrados.map((empleado, index) => (
            <tr key={index}>
              <td>{empleado.nombre}</td>
              <td>{empleado.cargo}</td>
              <td>{empleado.departamento}</td>
              <td>{empleado.salario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEmpleados;
