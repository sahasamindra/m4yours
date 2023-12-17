import React from 'react'
import styles from './ImageContainer.module.css'

function ImageContainer({ value }) {
    return (
        <div className={styles.imageContainer}>
            <img src={value ? value : ""} alt="Uploaded" className={styles.uploadedImage} />
        </div>
    )
}

export default ImageContainer