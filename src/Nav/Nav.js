import React, { Component } from 'react';
import styles from "./Nav.module.css"

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsurvey-logo.svg?alt=media&token=a54c847d-ad3d-4a25-b51d-7cd500e23a86"

class Nav extends Component {

    render() {
        return (
            <section className={styles.nav}>
                <img src={logo} />
                <div>
                    <span>Servicios</span>
                    <span>Contacto</span>
                    <button className={styles.buttonSecondary}>Agendar Demo</button>
                </div>
            </section>
        );
    }
}

export default Nav;
