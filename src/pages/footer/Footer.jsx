import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css"

const logoBlanco = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsurvey-logo-blanco.svg?alt=media&token=d3edb473-5a71-42f2-bca7-763f72525d0c"
const facebook = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2FFacebook.svg?alt=media&token=dd512334-1cea-4ffc-9129-b76731585d7c"
const twitter = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2FTwitter.svg?alt=media&token=d2ac63c0-4106-4f59-830d-86cea0ce6183"
const linkedin = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2FLinkedin.svg?alt=media&token=8a7f10cd-6faa-4beb-933f-7e850c6db1d0"
const instagram = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2FInstagram.svg?alt=media&token=5f8432d4-efd3-4667-993e-435cbdeb29ad"

class Footer extends Component {

    render() {
        return (
            <section className={styles.footer}>
                <div className={styles.footerBox}>
                    <div className={styles.cta}>
                        <p className={styles.invite}>¿Tienes alguna duda de como funciona SurveyUp? Escríbenos a</p>
                        <a href="mailto:contacto@surveyup.com" aria-label="Mail" rel="noopener noreferrer">
                            <p className={styles.invite}> <span style={{ color: "#E8B140" }}>contacto@surveyup.com</span></p>
                        </a>
                    </div>
                    <div className={styles.links}>
                        <p className={styles.subtitle}>Acerca de</p>
                        <Link to="/contacto">
                            <p>Contacto</p>
                        </Link>
                        <Link to="/preguntas-frecuentes">
                            <p>Preguntas frecuentes</p>
                        </Link>
                        <Link to="/aviso-de-privacidad">
                            <p>Aviso de privacidad </p>
                        </Link>
                    </div>
                </div>
                <hr />
                <div className={styles.disclaimers}>
                    <img className={styles.logo} src={logoBlanco} alt="logo" />
                    {/* <div className={styles.mediaBox}>
                        <a href='https://www.facebook.com/surveyup/' rel="noopener noreferrer" target='_blank'>
                            <img className={styles.media} src={facebook} alt="facebook" />
                        </a>
                        <a href='https://twitter.com/SurveyUp_' rel="noopener noreferrer" target='_blank'>
                            <img className={styles.media} src={twitter} alt="twitter" />
                        </a>
                        <a href='https://www.instagram.com/survey_up/' rel="noopener noreferrer" target='_blank'>
                            <img className={styles.media} src={instagram} alt="instagram" />
                        </a>

                    </div> */}
                    <p>© 2021 SurveyUp</p>
                </div>

            </section>
        );
    }
}

export default Footer;
