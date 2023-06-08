import React, { useState } from "react";

import SupportWindow from './SupportChatWindow'

import Avatar from './Avatar'

const SupportEngine = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <SupportWindow visible={visible} setVisible={setVisible}/>
            <Avatar
                onClick={() => setVisible(true)}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                }}
            />
        </div>
    )
}

export default SupportEngine;