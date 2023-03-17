import BaseAPI from './BaseAPI';
import {Chat} from "../apiTypes/chatTypes";
import {User} from "../apiTypes/authTypes";

export class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(): Promise<Chat[]> {
    return this.http.get('/');
  }

  create(title: string) {
    return this.http.post("/", {title});
  }

  delete(identifier: string): Promise<unknown> {
    return this.http.delete("/", {chatId: identifier});
  }

  getUsers(id: number): Promise<Array<User & { role: string }>> {
    return this.http.get(`/${id}/users`)
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', { users, chatId: id });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export default new ChatAPI();
