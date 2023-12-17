import React, { useState, useReducer } from 'react';
import styles from "./Dashboard.module.css"

import { ReactComponent as UndoIcon } from "../../assets/icons/corner-up-left.svg";
import { ReactComponent as RedoIcon } from "../../assets/icons/corner-up-right.svg";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";

import { ReactComponent as ChevronUp } from "../../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as ImageIcon } from "../../assets/icons/image.svg";

//figma Icons
import { ReactComponent as AddText } from "../../assets/figmaIcons/add-text.svg";
import { ReactComponent as ButtonOutline } from "../../assets/figmaIcons/button-outline.svg";
import { ReactComponent as ColumnIcon } from "../../assets/figmaIcons/columns.svg";
import { ReactComponent as BoxIcon } from "../../assets/figmaIcons/box.svg";
import { ReactComponent as StackIcon } from "../../assets/figmaIcons/stack.svg";

//components
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import Search from "../../components/Search/Search";
import TextEditor from "../../components/TextEditor/TextEditor";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import TextArea from "../../components/TextArea/TextArea";
import InlineEditor from "../../components/InlineEditor/InlineEditor";

//utilities
import Bar from "../../Utilities/Bar/Bar";
import AppState from "../../Constants/AppState";

export const AllContext = React.createContext();

function Dashboard() {
    const iconStroke = "rgba(255, 255, 255, 0.6)";

    const [isBlockOpen, setIsBlockOpen] = useState(true);

    const [isDragOn, setIsDragOn] = useState(false);

    const myComponents = [
        {
            title: "Hero",
            icon: <ImageIcon />,
        },
        {
            title: "Hero",
            icon: <ImageIcon />,
        },
        {
            title: "Hero",
            icon: <ImageIcon />,
        },
        {
            title: "Hero",
            icon: <ImageIcon />,
        },
        {
            title: "Hero",
            icon: <ImageIcon />,
        },
    ];

    const myBasic = [
        {
            title: "Text",
            icon: <AddText />,
        },
        {
            title: "Image",
            icon: <ImageIcon />,
        },
        {
            title: "Button",
            icon: <ButtonOutline />,
        },
        {
            title: "Columns",
            icon: <ColumnIcon />,
        },
        {
            title: "Box",
            icon: <BoxIcon />,
        },
        {
            title: "Section",
            icon: <StackIcon />,
        },
    ];

    const handleBlockMenu = () => {
        setIsBlockOpen(!isBlockOpen);
    };

    // ------------- Drag Events -------------

    const handleDragStart = (e, itemArr) => {
        e.dataTransfer.setData("item", itemArr);
        setIsDragOn(true);
    };

    const handleOnDrop = (e) => {
        dispatch({
            type: e.dataTransfer.getData("item").toUpperCase(),
            value: "",
            signature: Date.now(),
        });
        setIsDragOn(false);
    };

    const handleDragEnd = () => setIsDragOn(false);

    const handleOnDragOver = (e) => {
        e.preventDefault();
    };

    // ------------- Parent States -------------

    const reducer = (state, action) => {
        switch (action.type) {
            case AppState.ADD_IMAGE:
                return [
                    ...state,
                    ...[
                        {
                            type: action.type,
                            value: action.value,
                            signature: action.signature,
                        },
                    ],
                ];

            case AppState.MODIFY_IMAGE:
                return state.map((item) => {
                    if (item.signature === action.signature) {
                        return { ...item, value: action.value };
                    }
                    return item;
                });

            case AppState.REMOVE_IMAGE:
                return state.filter((item) => item.signature !== action.signature);

            case AppState.ADD_TEXT:
                return [
                    ...state,
                    ...[
                        {
                            type: action.type,
                            value: action.value,
                            signature: action.signature,
                        },
                    ],
                ];

            case AppState.MODIFY_TEXT:
                return state.map((item) => {
                    if (item.signature === action.signature) {
                        return { ...item, value: action.value };
                    }
                    return item;
                });

            case AppState.REMOVE_TEXT:
                return state.filter((item) => item.signature !== action.signature);

            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, []);

    // useEffect(() => {
    //     localStorage.clear()
    // }, []);

    const handlePublish = () => {
        if (state.length > 0) {
            localStorage.setItem('outputState', JSON.stringify(state));
            window.open(`/dashboard/${Date.now()}`, '_blank');
        } else {
            alert('There is nothing to publish');
        }
    };

    return (
        <AllContext.Provider
            value={{
                dragStarted: handleDragStart,
                dragEnded: handleDragEnd,
                dispatch,
            }}
        >
            <div className={styles.layout}>
                {/* -------------------------------- HEADER--------------------------------  */}
                <div className={styles.header}>
                    <h3 className={styles.title}>M4yours Editor</h3>

                    <div className={styles.rightSide}>
                        <div className={styles.utilityButtons}>
                            <button type="button" className={styles.customIcons}>
                                <UndoIcon stroke={iconStroke} />
                            </button>

                            <button type="button" className={styles.customIcons}>
                                <RedoIcon stroke={iconStroke} />
                            </button>

                            <button type="button" className={styles.customIcons}>
                                <EyeIcon stroke={iconStroke} />
                            </button>
                        </div>
                        <button className={styles.publish} onClick={handlePublish}>
                            Publish
                        </button>
                    </div>
                </div>

                {/* -------------------------------- LEFT--------------------------------  */}
                <aside className={styles.leftMenu}>
                    <Search />

                    <Bar />

                    <MenuContainer menuHeader="My Components" menus={myComponents} />

                    <Bar />

                    <MenuContainer menuHeader="Basic" menus={myBasic} />
                </aside>

                {/* -------------------------------- BODY--------------------------------  */}
                <div className={`${styles.workspace}`}>
                    <div
                        className={`${styles.draggableArea} ${isDragOn ? styles.draggableAreaHighlighted : ""
                            }`}
                        onDragOver={handleOnDragOver}
                        onDrop={handleOnDrop}
                    >
                        {!state.length > 0 && (
                            <div className={styles.instructionBlock}>
                                <label>Drag & Drop Block</label>
                                <ImageIcon />
                            </div>
                        )}

                        {state.length > 0 &&
                            state.map((item, index) => (
                                <div key={index}>
                                    {item.type === "TEXT" && (
                                        <TextArea
                                            signature={item.signature}
                                            defaultValue={item.value}
                                        />
                                    )}
                                    {item.type === "IMAGE" && (
                                        <ImageUploader
                                            signature={item.signature}
                                            defaultValue={item.value}
                                        />
                                    )}
                                </div>
                            ))}
                    </div>
                </div>

                {/* -------------------------------- RIGHT--------------------------------  */}
                <aside className={styles.rightMenu}>
                    <div className={styles.menuContainer}>
                        <div className={styles.blockHeader}>
                            <h3 className={styles.title2}>Block Options</h3>
                            <button
                                type="button"
                                className={styles.customIcons}
                                onClick={handleBlockMenu}
                            >
                                {isBlockOpen ? (
                                    <ChevronDown stroke={iconStroke} />
                                ) : (
                                    <ChevronUp stroke={iconStroke} />
                                )}
                            </button>
                        </div>
                        {isBlockOpen ? (
                            <>
                                <input
                                    type="text"
                                    placeholder="text*"
                                    className={styles.editorInput}
                                />
                                <TextEditor />
                            </>
                        ) : (
                            ""
                        )}
                    </div>

                    <Bar />

                    <InlineEditor />
                </aside>
            </div>
        </AllContext.Provider>
    )
}

export default Dashboard