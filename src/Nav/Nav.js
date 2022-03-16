import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css"

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsurvey-logo.svg?alt=media&token=a54c847d-ad3d-4a25-b51d-7cd500e23a86"

class Nav extends Component {

    render() {
        return (
            <section className={styles.nav}>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <div>

                    <Link to="/contacto">
                        <span>Contacto</span>
                    </Link>
                    <button className={styles.buttonSecondary}>Agendar Demo</button>
                </div>
            </section>
        );
    }
}

export default Nav;
