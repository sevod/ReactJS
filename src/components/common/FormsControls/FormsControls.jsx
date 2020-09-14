import React from "react"
import styles from './FormsControls.module.css'

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
