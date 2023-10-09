import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Socket;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    this.server.emit('message', payload);
    console.log({ payload });
    return 'Hello world!';
  }

  @SubscribeMessage('chat-message')
  handleChatMessage(client: any, payload: any): void {
    this.server.emit('chat-message', payload);
  }

  handleConnection(client: any) {
    console.log('client connected ', client.id);
  }

  handleDisconnect(client: any) {
    console.log('client disconnected ', client.id);
  }
}
