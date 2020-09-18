import React from "react"
import styles from './FormsControls.module.css'
import {Field} from "redux-form";

export const TextArea = ({input, meta: {touched, error}}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
            <textarea {...input} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input, meta, type,  ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
            <input {...input} type={type}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>

)