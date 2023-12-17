import React from 'react'
import styles from './TextContainer.module.css'

function TextContainer({ value }) {
    return (
        <div className={styles.textContainer}>
            <p className={styles.textArea}>{value ? value : ""}</p>
        </div>
    )
}

export default TextContainer