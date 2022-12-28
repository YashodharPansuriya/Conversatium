/* eslint-disable */
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    useEffect(() =>{
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);

        setRoom(room);
        setName(name)

        socket.emit('join', {name, room}, () => {

        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...message, message]);
        })
    }, [messages])
}

const chat = () => {
    return (
        <h1>Chat</h1>
    )
}

export default chat;