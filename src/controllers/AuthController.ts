import {SigninData, SignupData} from "../apiTypes/authTypes";
import router from "../utils/Router";
import store from "../utils/Store";
import {AuthAPI} from "../api/AuthAPI";
import {Routes} from "../static/route/route";
import MessagesController from "./MessagesController";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }
  async signin(data: SigninData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      router.go(Routes.Profile);
    } catch (e: any) {
      store.set('user.error', (e as Error))
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go(Routes.Profile);
    } catch (e: any) {
      store.set('user.error', (e as Error))
    }
  }

  async fetchUser() {
    store.set('user.isLoading', true);

    const user = await this.api.read();

    store.set('user.data', user);

    store.set('user.isLoading', false);

  }

  async logout() {
    try {
      await this.api.logout();

      store.set('user', undefined)

      MessagesController.closeAll();

      store.set("chats", undefined);

      router.go(Routes.Index);
    } catch (e: any) {
      store.set('user.error', (e as Error))
    }
  }
}

export default new AuthController();
