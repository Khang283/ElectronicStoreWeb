import React, { useState } from "react"

import { styles } from "../styles"

import axios from 'axios'

import { LoadingOutlined } from '@ant-design/icons'

import Avatar from '../Avatar'

const EmailForm = (props) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback) {
         axios.put(
            'https://api.chatengine.io/users/',
            { username: email, email: email, secret: email },
            { headers: { "PRIVATE-KEY": process.env.REACT_APP_CE_PRIVATE_KEY } }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create user error', e))
    }

    function getOrCreateChat(callback) {
         axios.put(
            'https://api.chatengine.io/chats/',
            { usernames: [email, 'ADMIN'], is_direct_chat: true },
            {
                headers: {
                    "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
                    "User-Name": email,
                    "User-Secret": email,
                    withCredentials: false,
                }
            }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create chat error', e))
    }

     function handleSubmit(event) {
         event.preventDefault();
        setLoading(true)

        console.log('Sending Email', email)

        if (!email) {
            alert('Vui lòng nhập email')
            setLoading(false)
            return
        }

        // Check if email is in the correct format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert('Email không hợp lệ')
            setLoading(false)
            return
        }

         getOrCreateUser(
             user => {
                props.setUser && props.setUser(user)
                 getOrCreateChat(chat => {
                    setLoading(false)
                    props.setChat && props.setChat(chat)
                })
            }
        )
    }

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible ? '100%' : '0px',
                    opacity: props.visible ? '1' : '0'
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>

            <div
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
            <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)',
                        left: 'calc(50% - 41px)',
                    }
                }}
            />

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                    }}
                />

                <div style={styles.topText}>
                    Electronics Store xin chào 👋
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '25.75%' }}
                >
                    <input
                        placeholder='Nhập email của bạn'
                        onChange={e => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                </form>

                <button
                    onClick={handleSubmit}
                    style={{
                        position: 'relative',
                        width: '65%',
                        top: '30%',
                        display: 'inline-block',
                        padding: '15px 25px',
                        fontSize: '15px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        textDecoration: 'none',
                        outline: 'none',
                        color: 'white',
                        backgroundColor: 'black',
                        border: 'none',
                        borderRadius: '15px',
                    }}
                    // Add hover styles
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'gray';
                        e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'black';
                        e.target.style.color = 'white';
                    }}
                >
                    Bắt đầu cuộc trò chuyện
                </button>


            </div>
        </div>
    )
}

export default EmailForm;