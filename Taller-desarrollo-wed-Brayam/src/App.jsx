import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [empleados, setEmpleados] = useState([]);
    const [buscar, setBuscar] = useState('');

    useEffect(() => {
        fetch('/empleados.json')
            .then((response) => response.json())
            .then((data) => setEmpleados(data))
            .catch((error) => console.error('Error al subir empleados:', error));
    }, []);

    const mostrarEmpleado = empleados.filter((empleado) =>
        `${empleado.nombre} ${empleado.cargo} ${empleado.departamento} ${empleado.salario}`
            .toLowerCase()
            .includes(buscar.toLowerCase())
    );

    return (
        <div className="App">
            <h1>Lista de empleados</h1>
            <input
                type="text"
                placeholder="Buscar"
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
            />
            <div className="empleados-lista">
                {mostrarEmpleado.length > 0 ? (
                    mostrarEmpleado.map((empleado, index) => (
                        <div key={index} className="empleado-card">
                            <h2>{empleado.nombre}</h2>
                            <p><strong>Cargo:</strong> {empleado.cargo}</p>
                            <p><strong>Departamento:</strong> {empleado.departamento}</p>
                            <p><strong>Salario:</strong> {empleado.salario}</p>
                        </div>
                    ))
                ) : (
                    <div className="noempleados">
                        No se encontraron empleados.
                    </div>
                )}
            </div>
        </div>
    );

}

export default App;
