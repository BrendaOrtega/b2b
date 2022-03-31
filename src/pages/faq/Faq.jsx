import { useEffect, useState } from 'react';
import styles from "./Faq.module.css"
import Fade from 'react-reveal/Fade';
import { FiMinus } from 'react-icons/fi'

const plus = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficons8-plus-math%201.svg?alt=media&token=df838686-e625-4d90-9bd2-7a9300642ee8"

export default function Faq() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    const [open, setOpen] = useState(false)
    return (

        <section className={styles.preguntas}>
            <meta
                name="description"
                content="Creamos una experiencia humana y diferente de la investigación de mercado en línea, reclutando y perfilando usuarios con base en los requerimientos de tu estudio para asegurar resultados de calidad."
            />
            <meta
                name="keywords"
                content="encuestas, encuesta, estudios de mercado, perfilamiento de usuarios, diseño de encuestas, análisis de datos, panel, panel de usuarios"
            />
            <title>Preguntas frecuentes</title>
            <Fade>
                <h2 className={styles.titles}>Preguntas frecuentes</h2>
            </Fade>
            <Toggle
                question="¿Cómo funciona SuerveyUp?"
                answer="El proceso es muy simple, nos compartes el brief de investigación de tu proyecto, realizamos el cronograma, para después programar tu encuesta, reclutar o perfilar a los usuarios, y por último sintetizamos y estructuramos los datos en un reporte final en distintos formatos. "
            />
            <Toggle
                question="¿Qué tipos de perfiles hay en su Panel?"
                answer="Contamos con varios tipos de segmentos, algunos de ellos son: demográfica, geográfica, por industria, profesión, nivel de ingresos y muchos más." />
            <Fade>
                <section className={styles.faq} >
                    <div
                        onClick={() => setOpen(value => !value)}
                    >
                        <p>¿Cómo aseguran la calidad de las respuestas?</p>
                        {open ? <FiMinus style={{ fontSize: 36 }} /> : <img src={plus} alt="plus icon" />}
                    </div>
                    {open && <p className={styles.answer}>
                        Dentro de nuestros procesos de Supervisión y seguimiento de datos tomamos algunas medidas para asgurar la calidad de las respuestas como:
                        <ul>
                            <li>Perfilamiento - Contamos con procesos que nos permiten mantener actualizada la información de nuestros panelistas, así que asignamos tu encuesta solo a panelistas que cumplen el perfil que tu encuesta requiere.</li>
                            <li>Seguridad en la encuesta - Nuestra IA asegura que quien responda sea el panelista en cuestión siguiendo diversos protocolos de seguridad.</li>
                            <li>Encuesta - Durante la encuesta realizamos validaciones para asegurar que el panelista este poniendo la atención requerida.</li>
                        </ul>
                    </p>}
                </section>
            </Fade>
            <Toggle
                question="¿Qué tipo de programación de encuestas realizan?"
                answer="Realizamos desde la encuesta más flexible hasta la más compleja. Algunos tipos de programación que realizamos son maxdiff, conjoint, simulación en general, entre otros." />
            <Toggle
                question="¿En cuánto tiempo entregan los resultados de un estudio?"
                answer="El tiempo de entrega varía en función del tipo de proyecto, sin embargo, tenemos un tiempo promedio de 1 mes. Te recomendamos ponerte en contacto con nosotros para revisar tu proyecto y darte une fecha estimada." />
            <Toggle
                question="¿Cuál es el costo de un estudio?"
                answer="Los costos dependen del tipo de proyecto, dependerá de la muestra, la metodología y la complejidad del mismo. Escríbenos a contacto@surveyup.com.mx y obtén una cotización para tu proyecto."
            />
        </section>
    )
}

const Toggle = ({ question, answer }) => {
    const [open, setOpen] = useState(false)
    return (
        <Fade>
            <section className={styles.faq} >
                <div
                    onClick={() => setOpen(value => !value)}
                >
                    <p>{question}</p>
                    {open ? <FiMinus style={{ fontSize: 36 }} /> : <img src={plus} alt="plus icon" />}
                </div>
                {open && <p className={styles.answer}>{answer}</p>}
            </section>
        </Fade>
    )
}