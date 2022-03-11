import * as React from 'react'
import styles from "./Home.module.css";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const preview = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2FPreview.png?alt=media&token=c96880d5-b9a6-46b9-9ddb-27720f592539"
const image = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsurvey.png?alt=media&token=658f67e5-06e1-475e-85e1-5648165c8ef8"
const arrow = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fflecha.svg?alt=media&token=c24560e4-97e0-492f-8572-46c6efae9a4f"


export default function HomePage() {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <section className={styles.home}>
            <section className={styles.welcome}>
                <Zoom >
                    <h1 className={styles.header}>El socio perfecto para conocer a tus consumidores</h1>
                    <p className={styles.slogan}>Creamos una experiencia humana y diferente de la investigación de mercado en línea, reclutando y perfilando usuarios con base en los requerimientos de tu estudio para asegurar resultados de calidad.</p>

                    <button className={styles.buttonPrimary}>Contactar</button>

                    <br />

                    <img className={styles.preview} src={preview} alt="gif app" />
                </Zoom>
            </section>
            <section className={styles.services}>
                <Fade bottom>
                    <h2 className={styles.titles}>Nuestras soluciones</h2>
                    <p className={styles.text}>Somos la mejor comunidad de incentivos para responder encuestas al preocuparnos no solo por las respuestas, sino por crear una experiencia única para que nuestros panelistas compartan sus opiniones. Como resultado, aseguramos un alto índice de respuesta y calidad en los siguientes servicios</p>
                </Fade>
                <div className={styles.servicesBox}>
                    <Fade bottom>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg}></div>
                            <h2>Servicio de Diseño de Encuestas</h2>
                            <p>Trabajamos en el diseño y configuración de tu encuesta para optimizar la obtención de resultados. </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg}></div>
                            <h2>Panel VIP</h2>
                            <p>Perfilamos a los usuarios para tu proyecto, ejecutamos la encuesta y te entregamos toda la información procesada en el formato que necesites. </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg}></div>
                            <h2>Panel dedicado</h2>
                            <p>¿Cuentas con una base de usuarios? Gestionamos a tus usuarios en nuestro sistema para tu proyecto.</p>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className={styles.services}>
                <Fade bottom>
                    <h2 className={styles.titles}>Nuestras soluciones</h2>
                    <p className={styles.text}>Somos la mejor comunidad de incentivos para responder encuestas al preocuparnos no solo por las respuestas, sino por crear una experiencia única para que nuestros panelistas compartan sus opiniones. Como resultado, aseguramos un alto índice de respuesta y calidad en los siguientes servicios</p>
                </Fade>
                <div className={styles.servicesBox}>
                    <Fade bottom>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg}></div>
                            <h2>Servicio de Diseño de Encuestas</h2>
                            <p>Trabajamos en el diseño y configuración de tu encuesta para optimizar la obtención de resultados. </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg}></div>
                            <h2>Panel VIP</h2>
                            <p>Perfilamos a los usuarios para tu proyecto, ejecutamos la encuesta y te entregamos toda la información procesada en el formato que necesites. </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg}></div>
                            <h2>Panel dedicado</h2>
                            <p>¿Cuentas con una base de usuarios? Gestionamos a tus usuarios en nuestro sistema para tu proyecto.</p>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className={styles.why}>
                <Fade bottom>
                    <h2 className={styles.titles}>¿Por qué SurveUp?</h2>
                </Fade>
                <div className={styles.whyBox}>
                    <Fade bottom>
                        <div className={styles.advantages}>
                            <p>SurveyUp no es una empresa de estudios de mercado cualquiera, en cada uno de nuestros procesos utilizamos tecnología de vanguardía acompañada de una grata experiencia para nuestros panelistas lo cual nos permite contar con:</p>
                            <ul>
                                <li><strong>Panel VIP</strong> - Nuestros panelistas tienen una experiencia única al participar en las encuesta acompañada de un esquema de incentivos atractivo que los mantiene participando activamente en nuestro panel.</li>
                                <li> <strong>Diversidad de perfiles</strong> - Tenemos un perfilamiento más detallado gracias a procesos dinámicos de actualización de preferencias de cada panelista, lo que se traduce en mejor calidad en cada una de las respuestas.</li>
                                <li> <strong>Procesos automatizados </strong>- Sabemos que los procesos han cambiado en los últimos años, así que contamos con tecnología de punta que nos permite ofrecer una experiencia 100% digital y única al panelista, siendo altamente intuitivo, fácil de usar y personalizable. </li>
                            </ul>
                        </div>
                        <div className={styles.whyImg}>
                            <img src={image} alt="people working" />
                        </div>
                    </Fade>
                </div>
            </section>
            <section className={styles.steps}>
                <Fade bottom>
                    <h2 className={styles.titles}>¿Cómo funciona SurveyUp?</h2>
                    <p className={styles.text}>Trabajar con nosotros es fácil, contamos con una comunidad de panelistas activos que junto con un proceso automatizado nos permite obtener los mejores resultados de forma rápida.</p>
                </Fade>
                <div className={styles.steper}>
                    <Fade bottom>
                        <div className={styles.cardStep}>
                            <h3>Diseño y programación de encuesta</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.cardStep}>
                            <h3>Perfilamiento de usuarios</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.cardStep}>
                            <h3>Supervisión y seguimiento de datos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.cardStep}>
                            <h3>Sintetización de datos y entrega</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet </p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Fade bottom>
                        <p className={styles.txt}>¿Trabajamos juntos tu próximo proyecto?</p>
                        <button className={styles.buttonPrimary}>Contactar</button>
                    </Fade>
                </div>

            </section>
        </section >

    )
}