import React, { Component } from 'react';
import styles from "./Footer.module.css"

const logoBlanco = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsurvey-logo-blanco.svg?alt=media&token=d3edb473-5a71-42f2-bca7-763f72525d0c"

class Footer extends Component {

    render() {
        return (
            <section className={styles.footer}>
                <div className={styles.footerBox}>
                    <div>
                        <p className={styles.invite}>¿Tienes alguna duda de como funciona SurveyUp? Escríbenos a</p>
                        <p className={styles.invite}> <span style={{ color: "#E8B140" }}>contacto@surveyup.com</span></p>
                    </div>
                    <div className={styles.links}>
                        <p className={styles.subtitle}>Acerca de</p>
                        <p>Contacto</p>
                        <p>Preguntas frecuentes</p>
                        <p>Términos y condiciones</p>
                    </div>
                </div>
                <hr />
                <div>
                    <img src={logoBlanco} />
                </div>

            </section>
        );
    }
}

export default Footer;
