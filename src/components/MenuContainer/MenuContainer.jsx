import React, { useState } from 'react';

import { ReactComponent as ChevronUp } from "../../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

import styles from './MenuContainer.module.css'
import Menu from '../Menu/Menu';

function MenuContainer({ menuHeader, menus }) {
    const iconStroke = "rgba(255, 255, 255, 0.6)";

    const [isComponentOpen, setIsComponentOpen] = useState(true);

    const handleComponentMenu = () => {
        setIsComponentOpen(!isComponentOpen);
    };

    return (
        <div>
            <div className={styles.blockHeader}>
                <h3 className={styles.title2}>{menuHeader}</h3>
                <button
                    type="button"
                    className={styles.customIcons}
                    onClick={handleComponentMenu}
                >
                    {isComponentOpen ? (
                        <ChevronDown stroke={iconStroke} />
                    ) : (
                        <ChevronUp stroke={iconStroke} />
                    )}
                </button>
            </div>

            {isComponentOpen ? (
                <div className={styles.blocks}>
                    {menus.length > 0 &&
                        menus.map((component, index) => (
                            <Menu title={component.title} icon={component.icon} key={index} />
                        ))}
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default MenuContainer