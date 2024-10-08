import React, { useEffect, useState } from 'react';

const ListaEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [consultaBusqueda, setConsultaBusqueda] = useState('');

    useEffect(() => {
        fetch('/empleados.json')
            .then((response) => response.json())
            .then((data) => setEmpleados(data))
            .catch((error) => console.error('Error al cargar los empleados:', error));
    }, []);

    const empleadosFiltrados = empleados.filter((empleado) => {
      
      const consultaBaja = consultaBusqueda.toLowerCase();
      
      
      const nombre = empleado.nombre.toLowerCase();
      const cargo = empleado.cargo.toLowerCase();
      const departamento = empleado.departamento.toLowerCase();
      const salario = empleado.salario.toLowerCase();
  
      return (
          nombre.includes(consultaBaja) ||
          cargo.includes(consultaBaja) ||
          departamento.includes(consultaBaja) ||
          salario.includes(consultaBaja)
      );
  });
  

    return (
        <div>
            <h1>Lista de Empleados</h1>
            <input
                type="text"
                placeholder="Buscar por nombre, cargo o departamento..."
                value={consultaBusqueda}
                onChange={(e) => setConsultaBusqueda(e.target.value)}
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
                    {empleadosFiltrados.length > 0 ? (
                        empleadosFiltrados.map((empleado, index) => (
                            <tr key={index}>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.cargo}</td>
                                <td>{empleado.departamento}</td>
                                <td>{empleado.salario}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No se encontraron empleados.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListaEmpleados;