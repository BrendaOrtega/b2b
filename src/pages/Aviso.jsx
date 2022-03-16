import * as React from 'react'
import styles from "./Home.module.css";
import Fade from 'react-reveal/Fade';

export default function Aviso() {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <section className={styles.aviso}>
            <Fade bottom>
                <h2 className={styles.titles}>Aviso de privacidad</h2>
                <p>SurveyUp con domicilio en Jalapa 19, Col. Roma, Alcaldía Cuauhtémoc, CDMX, México y portal de internet www.surveyup.com.mx, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
                <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
                <p>Respuesta a mensajes del formulario de contacto, Prestación de cualquier servicio solicitado</p>
                <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                </p>
                <p>La recepción de información para el desarrollo de un proyecto contempla la revelación y entrega de cierta información relativa a sus productos, capacidades y/o tecnologías, en el proceso de asociaciones de negocios para cada proyecto. La información revelada por cada parte es considerada estrictamente confidencial, secreta y propiedad exclusiva del cliente.
                </p>
                <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
                <p>Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a rflores@surveyup.com.mx y deberá contener:</p>
                <ul>
                    <li>Nombre completo del titular</li>
                    <li>Domicilio</li>
                    <li>Teléfono</li>
                    <li>Correo electrónico usado en este sitio web</li>
                    <li>Copia de una identificación oficial adjunta</li>
                    <li>Asunto «Derechos ARCO»</li>
                </ul>
                <p>Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros. La solicitud tendrá respuesta en los siguientes 5 días hábiles de la solicitud. Esta procederá mediante el correo donde se envió la petición.
                </p>
                <h3>El uso de tecnologías de rastreo en nuestro portal de internet</h3>
                <p>Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
                </p>
                <p>Identificadores, nombre de usuario y contraseñas de sesión, Región en la que se encuentra el usuario</p>
                <p>Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.
                </p>
                <p>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web www.surveyup.com.mx.
                </p>
                <p> <strong>Última actualización de este aviso de privacidad: 09/03/2022</strong>
                </p>
            </Fade>
        </section >
    )
}