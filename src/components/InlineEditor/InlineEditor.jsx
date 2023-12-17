import React, { useState } from 'react';
import styles from "./InlineEditor.module.css"

function InlineEditor() {
    const [isChecked, setChecked] = useState(true);
    const handleToggle = () => {
        setChecked(!isChecked);
    };
    return (
        <>
            <div className={styles.blockHeader}>
                <h3 className={styles.title2}>Inline Text Editing</h3>
                <label className={styles.toggleSwitch}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                    <div className={styles.slider} />
                </label>
            </div>

            {isChecked && (
                <p className={styles.instruction}>
                    Allow rich text editing inline on the page by double clicking on
                    the text blocks.
                </p>
            )}</>
    )
}

export default InlineEditor