import React from 'react'

//other 
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as ImageIcon } from "../../assets/icons/image.svg";

import { ReactComponent as LinkIcon } from "../../assets/icons/link.svg";
import { ReactComponent as LeftAlign } from "../../assets/icons/align-left.svg";
import { ReactComponent as CenterAlign } from "../../assets/icons/align-center.svg";
import { ReactComponent as RightAlign } from "../../assets/icons/align-right.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as Italics } from "../../assets/icons/italic.svg";
import { ReactComponent as BoldIcon } from "../../assets/icons/bold.svg";
import { ReactComponent as UnderlineIcon } from "../../assets/icons/underline.svg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";

//figma Icons
import { ReactComponent as ColorFillIcon } from "../../assets/figmaIcons/colorFill.svg";
import { ReactComponent as StrikeThroughIcon } from "../../assets/figmaIcons/strikeTrough.svg";
import { ReactComponent as AIcon } from "../../assets/figmaIcons/A.svg";

import styles from './TextEditor.module.css'

function TextEditor() {
    return (
        <div className={styles.editorContainer}>
            <div className={styles.textEditor}>
                {/* ---------- row 1 ---------- */}
                <button
                    className={`${styles.fontSelection} ${styles.common}`}
                >
                    <span>Normal</span>
                    <span>
                        <ChevronDown />
                    </span>
                </button>
                <button
                    className={`${styles.bold} ${styles.common} ${styles.commonFlex}`}
                >
                    <BoldIcon />
                </button>
                <button
                    className={`${styles.italics} ${styles.common} ${styles.commonFlex}`}
                >
                    <Italics />
                </button>
                <button
                    className={`${styles.underline} ${styles.common} ${styles.commonFlex}`}
                >
                    <UnderlineIcon />
                </button>
                <button
                    className={`${styles.strikeThrough} ${styles.common} ${styles.commonFlex}`}
                >
                    <StrikeThroughIcon />
                </button>
                <button className={`${styles.color} ${styles.common}`}>
                    <FilterIcon /> <AIcon /> <ColorFillIcon />
                </button>

                {/* ---------- row 2 ---------- */}

                <button className={`${styles.size} ${styles.common}`}>
                    <span>16</span>
                    <span>
                        <ChevronDown />
                    </span>
                </button>
                <button
                    className={`${styles.left} ${styles.common} ${styles.commonFlex}`}
                >
                    <LeftAlign />
                </button>
                <button
                    className={`${styles.just} ${styles.common} ${styles.commonFlex}`}
                >
                    <CenterAlign />
                </button>
                <button
                    className={`${styles.right} ${styles.common} ${styles.commonFlex}`}
                >
                    <RightAlign />
                </button>
                <button
                    className={`${styles.play} ${styles.common} ${styles.commonFlex}`}
                >
                    <PlayIcon />
                </button>
                <button className={`${styles.images} ${styles.common}`}>
                    <ImageIcon />
                    <LinkIcon />
                </button>
            </div>

            <h3 className={styles.instruction}>
                Integrate Build Publish And Done
            </h3>
        </div>
    )
}

export default TextEditor