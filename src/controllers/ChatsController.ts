import store from '../utils/Store';
import MessagesController from './MessagesController';
import {ChatAPI} from "../api/ChatAPI";
import {ErrorReason} from "../apiTypes/errorTypes";

class ChatsController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = new ChatAPI();
  }

  async create(title: string) {
    try {
      await this.api.create(title);
      await this.fetchChats();
    } catch (e: unknown) {
      store.set("error", (e as ErrorReason).reason);
    }
  }

  async fetchChats() {
    store.set('chats.isLoading', true);

    try {
      const chats = await this.api.read();

      chats.map(async (chat: { id: number; }) => {
        const token = await this.getToken(chat.id);

        await MessagesController.connect(chat.id, token);
      });

      store.set('chats.list', chats);
    } catch (e: unknown) {
      store.set("error", (e as ErrorReason).reason);
    }

    store.set('chats.isLoading', false);

  }

  addUserToChat(id: number, userId: number) {
    try {
      this.api.addUsers(id, [userId]);
    } catch (e: unknown) {
      store.set("error", (e as ErrorReason).reason);
    }
  }

  removeUserFromChat(id: number, userId: number) {
    try {
      this.api.deleteUsers(id, [userId]);
    } catch (e: unknown) {
      store.set("error", (e as ErrorReason).reason);
    }
  }

  async delete(id: number) {
    try {
      await this.api.delete(id);

      await this.fetchChats();
    } catch (e: unknown) {
      store.set("error", (e as ErrorReason).reason);
    }
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChatId', id);
  }
}

export default new ChatsController();
