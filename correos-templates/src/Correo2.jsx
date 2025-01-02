import React from "react";
import "./Correo2.css";

export function Correo2() {
    return (
        <div className="correo-container">
            <div className="correo-header">
                <h2>Mensaje nuevo...</h2>
            </div>
            <div className="correo-body">
                <div className="correo-sender">
                    <img
                        src="https://cdn-icons-png.freepik.com/512/1077/1077114.png"
                        alt="Perfil"
                        className="profile-image"
                    />
                    <div className="sender-info">
                        <p className="sender-name">Solicitante</p>
                        <p className="recipient">para Supervisor de Gestión Documentaria</p>
                    </div>
                </div>
                <div className="correo-content">
                    <p><strong>Usuario:</strong></p>
                    <p><strong>DNI:</strong></p>
                    <p><strong>Correo_Electrónico:</strong></p>
                    <p><strong>Celular:</strong></p>
                    <p><strong>Universidad_o_Instituto:</strong></p>
                    <p><strong>Código_de_estudiante:</strong></p>
                    <p><strong>Carrera:</strong></p>
                    <p><strong>Tipo_de_Prácticas:</strong></p>
                    <p><strong>Área:</strong></p>
                    <p><strong>Líder_de_Área:</strong></p>
                    <p><strong>Puesto:</strong></p>
                    <p><strong>Fecha_de_ingreso:</strong></p>
                    <p><strong>Fecha_de_salida:</strong></p>
                </div>    
                <div className="correo-actions">
                    <button className="action-button">Responder</button>
                    <button className="action-button">Reenviar</button>
                </div>
            </div>
        </div>
  );
}
