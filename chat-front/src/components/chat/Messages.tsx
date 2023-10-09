import Message, { IMessage } from "./Message";

interface Props {
  messages: IMessage[];
}

const Messages = ({ messages }: Props) => {
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.timeSent}>
          <Message message={msg} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
