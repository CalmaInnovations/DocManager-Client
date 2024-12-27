import React from 'react';
import { useForm } from "react-hook-form";
import './Formulario.css';

export function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    alert("Formulario enviado correctamente");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">FORMULARIO DE INFORMACIÓN DEL USUARIO</h1>

        <div className="form-group">
          <label>Nombres y Apellidos 🧑‍🎓</label>
          <input
            type="text"
            placeholder="Nombre1 Nombre2 Apellido1 Apellido2"
            {...register("Usuario", { required: "Este campo es obligatorio" })}
          />
          {errors.Usuario && <p className="error">{errors.Usuario.message}</p>}

          <label>DNI 🆔</label>
          <input
            type="text"
            placeholder="01234567"
            {...register("DNI", {
              required: "El DNI es obligatorio",
              pattern: {
                value: /^[0-9]{8}$/,
                message: "El DNI debe tener exactamente 8 dígitos"
              }
            })}
          />
          {errors.DNI && <p className="error">{errors.DNI.message}</p>}
        </div>

        <div className="form-group">
          <label>Correo Electrónico 📧</label>
          <input
            type="email"
            placeholder="Correoelectronico@gmail.com"
            {...register("Correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El correo debe tener un formato válido"
              }
            })}
          />
          {errors.Correo && <p className="error">{errors.Correo.message}</p>}

          <label>Celular 📱</label>
          <input
            type="text"
            placeholder="123456789"
            {...register("Celular", {
              required: "El celular es obligatorio",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "El celular debe tener exactamente 9 dígitos"
              }
            })}
          />
          {errors.Celular && <p className="error">{errors.Celular.message}</p>}
        </div>

        <div className="form-group">
          <label>Universidad o Instituto 🎓</label>
          <input
            type="text"
            placeholder="Universidad1"
            {...register("Universidad", { required: "Este campo es obligatorio" })}
          />
          {errors.Universidad && <p className="error">{errors.Universidad.message}</p>}

          <label>Código de estudiante 🪪</label>
          <input
            type="text"
            placeholder="U12345678"
            {...register("CodigoEstudiante", { required: "Este campo es obligatorio" })}
          />
          {errors.CodigoEstudiante && <p className="error">{errors.CodigoEstudiante.message}</p>}
        </div>

        <div className="form-group">
          <label>Carrera 🏫</label>
          <input
            type="text"
            placeholder="Colocar Carrera...."
            {...register("Carrera", { required: "Este campo es obligatorio" })}
          />
          {errors.Carrera && <p className="error">{errors.Carrera.message}</p>}
        </div>

        <div className="form-group">
          <label>Tipo de Prácticas ⚙️</label>
          <input
            type="text"
            placeholder="Prácticas Preprofesionales"
            {...register("TipoPracticas", { required: "Este campo es obligatorio" })}
          />
          {errors.TipoPracticas && <p className="error">{errors.TipoPracticas.message}</p>}
        </div>

        <div className="form-group">
          <label>Área 🗂️</label>
          <input
            type="text"
            placeholder="Área de trabajo"
            {...register("Area", { required: "Este campo es obligatorio" })}
          />
          {errors.Area && <p className="error">{errors.Area.message}</p>}

          <label>Líder de área 👤</label>
          <input
            type="text"
            placeholder="Nombre del líder"
            {...register("LiderArea", { required: "Este campo es obligatorio" })}
          />
          {errors.LiderArea && <p className="error">{errors.LiderArea.message}</p>}
        </div>

        <div className="form-group">
          <label>Puesto 🔒</label>
          <input
            type="text"
            placeholder="Frontend"
            {...register("Puesto", { required: "Este campo es obligatorio" })}
          />
          {errors.Puesto && <p className="error">{errors.Puesto.message}</p>}
        </div>

        <div className="form-group">
          <label>Fecha de ingreso 📅</label>
          <input
            type="text"
            placeholder="MM / DD / AAAA"
            {...register("FechaIngreso", {
              required: "La fecha de ingreso es obligatoria",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
                message: "El formato debe ser MM/DD/AAAA"
              }
            })}
          />
          {errors.FechaIngreso && <p className="error">{errors.FechaIngreso.message}</p>}

          <label>Fecha de salida 📅</label>
          <input
            type="text"
            placeholder="MM / DD / AAAA"
            {...register("FechaSalida", {
              required: "La fecha de salida es obligatoria",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
                message: "El formato debe ser MM/DD/AAAA"
              }
            })}
          />
          {errors.FechaSalida && <p className="error">{errors.FechaSalida.message}</p>}
        </div>

        <button type="submit" className="form-button">GENERAR CARTA</button>
      </form>
    </div>
  );
};
