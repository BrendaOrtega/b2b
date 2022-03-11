import { useEffect } from 'react';
import styles from "./Contacto.module.css"
import Fade from 'react-reveal/Fade';

const plus = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficons8-plus-math%201.svg?alt=media&token=df838686-e625-4d90-9bd2-7a9300642ee8"

export default function Contacto() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <section className={styles.contacto}>
            <Fade>
                <h2 className={styles.titles}>Preguntas frecuentes</h2>
            </Fade>
            <Fade>
                <div className={styles.faq}>
                    <p>¿Cuál es el precio de un estudio?</p>
                    <img src={plus} />
                </div>
            </Fade>
            <Fade>
                <div className={styles.faq}>
                    <p>¿Cuál es el precio de un estudio?</p>
                    <img src={plus} />
                </div>
            </Fade>
        </section>
    )
}