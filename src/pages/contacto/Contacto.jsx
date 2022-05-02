import { useEffect } from 'react';
import styles from "./Contacto.module.css"
import Fade from 'react-reveal/Fade';
import ContactForm from '../forms/ContactForm';

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
            {/* form itself is responsible to comunicate with emails erver */}
            <ContactForm styles={styles} />
        </section>
    )
}