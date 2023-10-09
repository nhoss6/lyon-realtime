"use client";
import { useState } from "react";
import { Socket } from "socket.io-client";

export interface Props {
  socket: Socket;
}

const SendMessage = ({ socket }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("chat-message", {
      content: text,
      timeSent: new Date().toISOString(),
    });

    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SendMessage;
