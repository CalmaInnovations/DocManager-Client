import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombresApellidos: "",
    correoElectronico: "",
    dni: "",
    celular: "",
    universidadOInstituto: "",
    codigoEstudiante: "",
    carrera: "",
    tipoPracticas: "",
    area: "",
    liderArea: "",
    puesto: "",
    fechaIngreso: "",
    fechaSalida: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://obscure-system-5gqr56gvgv6vcv569-8080.app.github.dev/api/enviarCarta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Carta enviada con éxito!");
        console.log("Respuesta del servidor:", data);
      } else {
        const errorData = await response.json();
        alert("Error al enviar la carta.");
        console.error("Error del servidor:", errorData);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Hubo un problema al enviar la solicitud.");
    }
  };

  return (
    <div className="form-container">
      <h2>Formulario de Información del Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombresApellidos">Nombres y Apellidos</label>
          <input
            type="text"
            id="nombresApellidos"
            name="nombresApellidos"
            placeholder="Nombre1 Nombre2 Apellido1 Apellido2"
            value={formData.nombresApellidos}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            name="dni"
            placeholder="01234567"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correoElectronico">Correo Electrónico</label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            placeholder="CorreoElectronico@gmail.com"
            value={formData.correoElectronico}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Celular</label>
          <input
            type="text"
            id="celular"
            name="celular"
            placeholder="123456789"
            value={formData.celular}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="universidadOInstituto">Universidad o Instituto</label>
          <input
            type="text"
            id="universidadOInstituto"
            name="universidadOInstituto"
            placeholder="Universidad1"
            value={formData.universidadOInstituto}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="carrera">Carrera</label>
          <input
            type="text"
            id="carrera"
            name="carrera"
            placeholder="Colocar Carrera..."
            value={formData.carrera}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoPracticas">Tipo de Prácticas</label>
          <input
            type="text"
            id="tipoPracticas"
            name="tipoPracticas"
            placeholder="Prácticas Preprofesionales"
            value={formData.tipoPracticas}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="area">Área</label>
          <input
            type="text"
            id="area"
            name="area"
            placeholder="Área de trabajo"
            value={formData.area}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="puesto">Puesto</label>
          <input
            type="text"
            id="puesto"
            name="puesto"
            placeholder="Frontend"
            value={formData.puesto}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="liderArea">Lider</label>
          <input
          type="text"
          id="liderArea"
          name="liderArea"
          placeholder="Lider de área"
          value={formData.liderArea}
          onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="codigoEstudiante">Código de Estudiante</label>
          <input
            type="text"
            id="codigoEstudiante"
            name="codigoEstudiante"
            placeholder="Ingrese su código o dejar vacío para 0000"
            value={formData.codigoEstudiante}
            onChange={handleChange}
            onBlur={(e) =>
              !e.target.value &&
              setFormData((prev) => ({ ...prev, codigoEstudiante: "0000" }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaIngreso">Fecha de ingreso</label>
          <input
            type="date"
            id="fechaIngreso"
            name="fechaIngreso"
            value={formData.fechaIngreso}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaSalida">Fecha de salida</label>
          <input
            type="date"
            id="fechaSalida"
            name="fechaSalida"
            value={formData.fechaSalida}
            onChange={handleChange}
          />
        </div>
        <button type="submit">GENERAR CARTA</button>
      </form>
    </div>
  );
}

export default App;
