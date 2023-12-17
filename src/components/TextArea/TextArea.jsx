import React, { useContext } from 'react'
import { ReactComponent as Delete } from '../../assets/icons/x-circle.svg'
import { AllContext } from '../../Pages/Dashboard/Dashboard';
import AppState from '../../Constants/AppState';

import styles from './TextArea.module.css'

function TextArea({ signature, defaultValue }) {
    const { dispatch } = useContext(AllContext);

    const handleTextChange = (event) => {
        const newTextValue = event.target.value;
        dispatch({ type: AppState.MODIFY_TEXT, value: newTextValue, signature })
    };

    const handleDelete = () => {
        dispatch({ type: AppState.REMOVE_TEXT, value: "", signature })
    }

    // useEffect(() => {
    //     console.log("Text Area Rendering");
    // }, []);

    return (
        <div className={styles.textContainer}>
            <textarea
                value={defaultValue}
                onChange={handleTextChange}
                placeholder="Type something..."
                className={styles.textArea}
            />
            <div className={styles.deleteIcon} onClick={handleDelete}>
                <Delete />
            </div>
        </div>
    )
}

export default React.memo(TextArea)