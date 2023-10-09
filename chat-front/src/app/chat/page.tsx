'use client';
import Messages from '@/components/chat/Messages';
import SendMessage from '@/components/chat/SendMessage';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected', socket.id);
    });

    socket.on('chat-message', (data) => {
      setMessages((msg) => [...msg, data] as any);
    });
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <SendMessage socket={socket} />
      <Messages messages={messages} />
    </div>
  );
};

export default Chat;
