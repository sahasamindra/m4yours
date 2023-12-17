import React from 'react'
import TextContainer from './TextContainer/TextContainer';
import ImageContainer from './ImageContainer/ImageContainer';

import styles from "./Output.module.css"

function Output() {
    const state = JSON.parse(localStorage.getItem('outputState')) || []

    return (
        <div className={styles.wrapper}>

            {state.length > 0 &&
                state.map((item, index) => (
                    <div key={index} className={styles.eachItem}>
                        {item.type === "TEXT" && (
                            <TextContainer value={item.value} />
                        )}
                        {item.type === "IMAGE" && (
                            <ImageContainer value={item.value} />
                        )}
                    </div>
                ))}
        </div>
    )
}

export default Output