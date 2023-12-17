import React, { useContext } from 'react';
import { AllContext } from '../../Pages/Dashboard/Dashboard';

import styles from "./Menu.module.css"

function Menu({ icon, title }) {
    const { dragStarted, dragEnded } = useContext(AllContext);

    return (
        <div className={`${title === 'Text' || title === 'Image' ? styles.blockFunctional : styles.block}`} style={{ background: "f1614a" }} draggable onDragStart={(e) => dragStarted(e, title)} onDragEnd={dragEnded}>
            {icon}
            <p>{title}</p>
        </div>
    )
}

export default Menu