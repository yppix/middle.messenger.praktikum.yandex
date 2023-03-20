import store from '../utils/Store';
import MessagesController from './MessagesController';
import {ChatAPI} from "../api/ChatAPI";

class ChatsController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = new ChatAPI();
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    store.set('chats.isLoading', true);

    const chats = await this.api.read();

    chats.map(async (chat: { id: number; }) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    store.set('chats.list', chats);
    store.set('chats.isLoading', false);

  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
  }

  removeUserFromChat(id: number, userId: number) {
    this.api.deleteUsers(id, [userId]);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChatId', id);
  }
}

export default new ChatsController();
