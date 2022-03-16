import { useEffect } from 'react';
import styles from "./Contacto.module.css"
import Fade from 'react-reveal/Fade';

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
            <title>Contacto</title>
            <Fade>
                <h2 className={styles.titles}>Contacto</h2>
                <p>Completa la siguiente información y uno de nuestros asesores se pondrá en contacto contigo lo antes posible.</p>
            </Fade>
            <div className={styles.form}>
                <div className={styles.input}>
                    <label>Nombre*</label>
                    <input name="Name" />
                </div>
                <div className={styles.input}>
                    <label>Empresa</label>
                    <input name="Email" />
                </div>
                <div className={styles.input}>
                    <label>Email*</label>
                    <input name="Name" />
                </div>
                <div className={styles.input}>
                    <label>Teléfono</label>
                    <input name="Email" />
                </div>
                <div className={styles.textArea}>
                    <label>Mensaje*</label>
                    <textarea name="Email" />
                </div>
                <button className={styles.buttonPrimary}>Enviar</button>
            </div>


        </section>
    )
}