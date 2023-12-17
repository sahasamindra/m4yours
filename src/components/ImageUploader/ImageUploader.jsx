import React, { useContext } from 'react';
import { ReactComponent as Upload } from '../../assets/icons/upload.svg'
import { ReactComponent as Delete } from '../../assets/icons/x-circle.svg'
import { AllContext } from '../../Pages/Dashboard/Dashboard';
import AppState from '../../Constants/AppState';

import styles from './ImageUploader.module.css'

function ImageUploader({ signature, defaultValue }) {
    const { dispatch } = useContext(AllContext);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                dispatch({ type: AppState.MODIFY_IMAGE, value: reader.result, signature })
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
        }
    };

    const handleDelete = () => {
        dispatch({ type: AppState.MODIFY_IMAGE, value: "", signature })
    }

    const handleCancel = () => {
        dispatch({ type: AppState.REMOVE_IMAGE, value: "", signature })
    }

    // useEffect(() => {
    //     console.log("Image Upload Rendering");
    // }, []);

    return (
        <div>
            {!defaultValue && <div className={styles.uploadDialog}>
                <label>Upload Image</label>
                <label htmlFor='files' className={styles.pointer}><Upload /></label>
                <input type="file" id='files' accept="image/*" onChange={handleImageChange} style={{ visibility: 'hidden' }} />
                <label className={styles.pointer} onClick={handleCancel}>Cancel</label>
            </div>}

            {defaultValue && (
                <div className={styles.imageContainer}>
                    <div className={styles.deleteIcon} onClick={handleDelete}>
                        <Delete />
                    </div>
                    <img src={defaultValue} alt="Uploaded" className={styles.uploadedImage} />
                </div>
            )}
        </div>
    );
}

export default React.memo(ImageUploader);