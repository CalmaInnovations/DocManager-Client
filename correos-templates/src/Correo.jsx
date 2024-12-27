import React from "react";
import "./Correo.css";

export function Correo() {
    return (
        <div className="email-container">
            <div className="email-header">
                <h2>Mensaje nuevo...</h2>
            </div>
            <div className="email-body">
                <div className="email-sender">
                    <img
                        src="https://cdn-icons-png.freepik.com/512/1077/1077114.png"
                        alt="Perfil"
                        className="profile-image"
                    />
                    <div className="sender-info">
                        <p className="sender-name">Supervisor de Gestión Documentaria</p>
                        <p className="recipient">para Solicitante</p>
                    </div>
                </div>
                <div className="email-content">
                    <p>
                        Buenas tardes estimado(a) <b>[Nombre del pasante]</b>,
                    </p>
                    <p>
                        Adjunto encontrará el documento firmado, entregado para los fines
                        correspondientes. Agradecemos de antemano que confirme la recepción del
                        mismo a través de este medio.
                    </p>
                    <p>
                        En caso de que tenga alguna inquietud o requiera realizar alguna
                        corrección, por favor no dude en ponerse en contacto con el área en un
                        plazo de 2 días. Luego de la emisión del documento si no recibimos tu
                        confirmación, consideraremos que el documento fue entregado
                        correctamente. De esta manera, no estaremos ligados a futuros reclamos
                        relacionados con la entrega del certificado.
                    </p>
                    <p>
                        Puede descargar el documento dando click{" "}
                        <a
                            href="/src/components/Constancia.pdf"
                            download="Constancia.pdf"
                            className="download-link"
                        >
                            aquí
                        </a>.
                    </p>
                    <p>Quedamos atentos a su respuesta.</p>
                    <p>
                        <i>[Muchas gracias por su atención, Saludos cordiales, Muchas gracias, etc]</i>
                    </p>
                </div>
                <div className="email-actions">
                    <button className="action-button">Responder</button>
                    <button className="action-button">Reenviar</button>
                </div>
            </div>
        </div>
    );
}
