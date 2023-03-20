import BaseAPI from './BaseAPI';
import {User} from "../apiTypes/authTypes";
import {Chat} from "../apiTypes/chatTypes";

export class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(data?: Record<string, string | number>): Promise<Chat[]> {
    return this.http.get("/", data);
  }

  create(title: string) {
    return this.http.post("/", {title});
  }

  delete(identifier: number): Promise<unknown> {
    return this.http.delete("/", {chatId: identifier});
  }

  getUsers(id: number): Promise<Array<User & { role: string }>> {
    return this.http.get(`/${id}/users`)
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', { users, chatId: id });
  }

  deleteUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.delete('/users', { users, chatId: id });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export default new ChatAPI();
