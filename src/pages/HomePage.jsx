import * as React from 'react'
import styles from "./Home.module.css";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


const preview = "https://firebasestorage.googleapis.com/v0/b/b2b-survey-d48c1.appspot.com/o/giff_100.gif?alt=media&token=51b8dec9-88ef-4683-870b-f04d97991d45"
const image = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsurvey.png?alt=media&token=658f67e5-06e1-475e-85e1-5648165c8ef8"
const arrow = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fflecha.svg?alt=media&token=c24560e4-97e0-492f-8572-46c6efae9a4f"
const service1 = "https://firebasestorage.googleapis.com/v0/b/b2b-survey-d48c1.appspot.com/o/servicio1.svg?alt=media&token=edd00ddc-10a0-4ccf-a765-30afb2cffa3f"
const service2 = "https://firebasestorage.googleapis.com/v0/b/b2b-survey-d48c1.appspot.com/o/servicio2.svg?alt=media&token=54d97ee5-ffdc-4dec-baaf-06867bcbd7fe"
const service3 = "https://firebasestorage.googleapis.com/v0/b/b2b-survey-d48c1.appspot.com/o/servicio3.svg?alt=media&token=1302e9f9-4f41-456c-8aba-a402722e977a"


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
            <title>SurveyUp</title>

            <section className={styles.welcome}>
                <Fade bottom >
                    <h1 className={styles.header}>El socio perfecto para conocer a tus</h1>
                    <div className={styles.wrapper}>
                        <div className={styles.staticTxt}></div>
                        <Typer />
                    </div>
                    <p className={styles.slogan}>Creamos una experiencia humana y diferente de la investigación de mercado en línea, reclutando y perfilando usuarios con base en los requerimientos de tu estudio para asegurar resultados de calidad.</p>
                    <Link to="/contacto">
                        <button className={styles.buttonPrimary}>Contactar</button>
                    </Link>

                    <br />
                    <div className={styles.shadow} >
                        <img className={styles.preview} src={preview} alt="gif app" />
                    </div>
                </Fade>
            </section>
            <section className={styles.services}>
                <Fade bottom>
                    <h2 className={styles.titles}>Nuestras soluciones</h2>
                    <p className={styles.text}>Somos la mejor comunidad de incentivos para responder encuestas al preocuparnos no solo por las respuestas, sino por crear una experiencia única para que nuestros panelistas compartan sus opiniones. Como resultado, aseguramos un alto índice de respuesta y calidad en los siguientes servicios</p>
                </Fade>
                <div className={styles.servicesBox}>
                    <Fade bottom>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg} style={{ backgroundImage: `url("${service1}")` }}></div>
                            <h2>Servicio de Programación Encuestas</h2>
                            <p>Trabajamos en el diseño y configuración de tu encuesta para optimizar la obtención de resultados. </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg} style={{ backgroundImage: `url("${service2}")` }}></div>
                            <h2>Panel VIP</h2>
                            <p>Perfilamos a los usuarios para tu proyecto, ejecutamos la encuesta y te entregamos toda la información procesada en el formato que necesites. </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImg} style={{ backgroundImage: `url("${service3}")` }}></div>
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
                            <p>Programamos tu encuesta y te entregamos la versión Test. Una vez aprobada lanzamos el cuestionario a los panelistas.</p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.cardStep}>
                            <h3>Perfilamiento de usuarios</h3>
                            <p>Segmentamos a los panelistas de acuerdo al objetivo de tu proyecto. Enviamos invitaciones de forma paulatina para obtener los mejores resultados. </p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.cardStep}>
                            <h3>Supervisión y seguimiento de datos</h3>
                            <p>Realizamos el control de calidad de la base de datos, revisando estratégicamente las respuestas. Te proporcionamos una base preliminar al inicio del campo. </p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.cardStep}>
                            <h3>Sintetización de datos y entrega</h3>
                            <p>Nuestro sistema genera gráficas las cuales te compartimos con la base de datos en diferentes formatos que elijas: spss, csv y excel. </p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Fade>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Fade bottom>
                        <p className={styles.txt}>¿Trabajamos juntos tu próximo proyecto?</p>
                        <Link to="/contacto">
                            <button className={styles.buttonPrimary}>Contactar</button>
                        </Link>

                    </Fade>
                </div>

            </section>
        </section >

    )
}

export const Typer = ({ cursorClassName, wordClassName, words = ['Consumidores', 'Clientes', 'Usuarios'] }) => {
    const text = React.useRef('')
    const index = React.useRef(0)

    let timer

    const deleteWord = () => {
        clearInterval(timer)
        const word = text.current.innerText
        const newWord = word.substring(0, word.length - 1 === -1 ? 1 : word.length - 1)
        text.current.innerText = newWord
        if (newWord === '') {
            clearTimeout(timer)
            setTimeout(write(words[index.current]), 1000)
        } else {
            timer = setTimeout(deleteWord, 100)
        }


    }

    const write = React.useCallback((word = '') => {
        clearInterval(timer)
        let counter = -1
        // teletype.innerHTML = typer.value.substr(0, counter) + cursor;
        timer = setInterval(() => {
            counter++
            text.current.innerText = word.substring(0, counter)
            if (counter > word.length + 1) {
                clearInterval(timer)
                // setTimeout(afterWait, 1000)
                index.current += 1
                if (index.current > words.length - 1) {
                    index.current = 0
                }
                setTimeout(deleteWord, 1000)
                // setTimeout(deleteWord, 1000)

                // setTimeout(() => write(words[index.current]), 1000)
            }
        }, 150)
    }, [])

    React.useEffect(() => {
        write(words[0])
    }, [])

    return (
        <div className={styles.typer}>
            <span ref={text} className={wordClassName ? wordClassName : styles.word}>
            </span>
            <span className={cursorClassName || styles.cursor} ></span>
        </div>
    )
}