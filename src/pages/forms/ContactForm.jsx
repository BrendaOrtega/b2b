import { Form, Formik, useField } from "formik";
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { useRef } from "react";

const schema = yup.object().shape({
    name: yup.string().required('Escribe tu nombre'),
    company: yup.string(),
    email: yup.string().email('Debes escribir un email válido').required('Escribe un correo electrónico valido'),
    phone: yup.string(),
    message: yup.string().required('Dinos cómo podemos ayudarte'),
})

export default function ContactForm({ styles }) {
    const formRef = useRef(null)
    const onSubmit = async (form) => {
        const res = await fetch(
            '/contactForm',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...form, secret: 'blissmo' }),
            }
        )
        Swal.fire(
            '¡Tu mensaje se ha enviado!',
            'Nos pondremos en contacto a la brevedad',
            'success'
        )
        formRef.current.reset()
    }

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
                company: '',

            }}
            onSubmit={onSubmit}
            validationSchema={schema}

        >
            {(props) => (
                <Form
                    ref={formRef}
                    className={styles.form} >
                    <TextField
                        name="name"
                        type="text"
                        label="Nombre*"
                        styles={styles} />
                    <TextField
                        name="company"
                        type="text"
                        label="Empresa"
                        styles={styles} />
                    <TextField
                        name="email"
                        type="email"
                        label="Email*"
                        styles={styles} />
                    <TextField
                        name="phone"
                        type="text"
                        label="Teléfono"
                        styles={styles} />
                    <TextField
                        name="message"
                        type="textarea"
                        label="Mensaje*"
                        styles={styles} />
                    <button
                        type="submit"
                        className={styles.buttonPrimary}>Enviar</button>
                </Form>
            )}
        </Formik>
    )
}

const TextField = ({ label, type, name, styles }) => {
    const [field, meta] = useField(name) // remeber this is a global meta if not name passed
    return (
        <div className={type === 'textarea' ? styles.textArea : styles.input}>
            <label>{label}</label>
            {type === 'textarea' ?
                <textarea
                    {...field}
                    name={name}
                    style={{
                        // outlineColor: meta.error ? 'red' : undefined,
                    }}
                /> :
                <input
                    style={{
                        // outlineColor: meta.error ? 'red' : undefined,
                    }}
                    type={type}
                    {...field}
                    name={name}
                />}
            {meta.touched && meta.error ? (
                <span style={{ color: 'red' }}>{meta.error}</span>
            ) : null}
        </div>
    )
}