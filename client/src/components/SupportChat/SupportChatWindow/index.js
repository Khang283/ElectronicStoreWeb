import React, { useState } from "react"

import { styles } from "../styles";

import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";

const SupportWindow = props => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)

    function handleClose() {
        props.setVisible(false);
    }

    return (
        <div
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{
                    opacity: props.visible ? '1' : '0',
                    height: props.visible ? '70%' : '0px',
                }
            }}
        >
            <button
                onClick={handleClose}
                style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    zIndex: "9999"
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
            
            <EmailForm
                visible={user === null || chat === null}
                setUser={user => setUser(user)}
                setChat={chat => setChat(chat)}
            />

            <ChatEngine
                visible={user !== null && chat !== null}
                user={user}
                chat={chat}
                offset={7}
            />
        </div>
    )
}

export default SupportWindow;