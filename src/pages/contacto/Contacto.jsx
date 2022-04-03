import { useEffect } from 'react';
import styles from "./Contacto.module.css"
import Fade from 'react-reveal/Fade';
// import sendEmail from '../services/email'


export default function Contacto() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    // const initialState = {
    //     name: '',
    //     company: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    // }
    // state = initialState

    // onChange = ({ target: { name, value } }) => {
    //     this.setState({ [name]: value })
    // }

    // sendEmailWithService = (e) => {
    //     e.preventDefault()
    //     sendEmail(this.state)
    //         .then(data => {
    //             console.log(data)
    //             if (data.ok) {
    //                 message.success('Request successfuly sent')
    //             } else {
    //                 message.error('Error on request, please try again')
    //             }
    //         })

    //     this.setState(initialState)
    // }
    return (
        <section className={styles.contacto}>
            <title>Contacto</title>
            <Fade>
                <h2 className={styles.titles}>Contacto</h2>
                <p>Completa la siguiente información y uno de nuestros asesores se pondrá en contacto contigo lo antes posible.</p>
            </Fade>
            {/* <form className={styles.form} onSubmit={this.sendEmailWithService} >
                <div className={styles.input}>
                    <label>Nombre*</label>
                    <input value={this.state.name} onChange={this.onChange} placeholder="Name" name="name" required />
                </div>
                <div className={styles.input}>
                    <label>Empresa</label>
                    <input value={this.state.message} onChange={this.onChange} type="text" placeholder="Empresa" name="company" required />
                </div>
                <div className={styles.input}>
                    <label>Email*</label>
                    <input value={this.state.email} onChange={this.onChange} placeholder="Email address" name="email" required />
                </div>
                <div className={styles.input}>
                    <label>Teléfono</label>
                    <input value={this.state.phone} onChange={this.onChange} placeholder="Telephone number" name="phone" required />
                </div>
                <div className={styles.textArea}>
                    <label>Mensaje*</label>
                    <textarea value={this.state.message} onChange={this.onChange} type="text" placeholder="Message" name="message" required />
                </div>
                <button className={styles.buttonPrimary}>Enviar</button>
            </form> */}
            <form className={styles.form}  >
                <div className={styles.input}>
                    <label>Nombre*</label>
                    <input name="name" required />
                </div>
                <div className={styles.input}>
                    <label>Empresa</label>
                    <input type="text" name="company" required />
                </div>
                <div className={styles.input}>
                    <label>Email*</label>
                    <input placeholder="55 555 55 55" name="email" required />
                </div>
                <div className={styles.input}>
                    <label>Teléfono</label>
                    <input placeholder="ejemplo@empresa.com" name="phone" required />
                </div>
                <div className={styles.textArea}>
                    <label>Mensaje*</label>
                    <textarea type="text" placeholder="Escribe un mensaje" name="message" required />
                </div>
                <button className={styles.buttonPrimary}>Enviar</button>
            </form>


        </section>
    )
}