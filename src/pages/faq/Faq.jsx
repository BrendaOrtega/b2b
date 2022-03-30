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
                answer="Contamos con varios tipos de segmentos, algunos de ellos son: demográfica, geográfica, por industria y algunos más."
            />
            <Toggle
                question="¿Qué tipos de perfiles hay en su Panel?"
                answer="Contamos con varios tipos de segmentos, algunos de ellos son: demográfica, geográfica, por industria y algunos más." />
            <Toggle
                question="¿Cómo aseguran la calidad de las respuestas?"
                answer="Contamos con varios tipos de segmentos, algunos de ellos son: demográfica, geográfica, por industria y algunos más." />
            <Toggle
                question="¿Qué tipo de programación de encuestas realizan?"
                answer="Porque no solo es un formulario para obtener respuestas, contamos con validaciones avanzadas. Realizamos desde la más flexible hasta la más compleja encuesta. Algunos tipos de programación que realizamos son maxdiff, conjoint, simulación en general, entre otros." />
            <Toggle question="¿En cuánto tiempo entregan los resultados de un estudio?"
                answer="Porque no solo es un formulario para obtener respuestas, contamos con validaciones avanzadas. Realizamos desde la más flexible hasta la más compleja encuesta. Algunos tipos de programación que realizamos son maxdiff, conjoint, simulación en general, entre otros." />
            <Toggle
                question="¿Cuál es el costo de un estudio?"
                answer="Porque no solo es un formulario para obtener respuestas, contamos con validaciones avanzadas. Realizamos desde la más flexible hasta la más compleja encuesta. Algunos tipos de programación que realizamos son maxdiff, conjoint, simulación en general, entre otros."
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