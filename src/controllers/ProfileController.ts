import {ProfileAPI} from "../api/ProfileAPI";
import router from "../utils/Router";
import store from "../utils/Store";
import {Profile, ProfilePassword, ProfileSearch} from "../apiTypes/userTypes";

class ChatController {
  private readonly api: ProfileAPI;

  constructor() {
    this.api = new ProfileAPI();
  }

  async updateProfile(data: Profile) {
    try {
      const user = await this.api.update(data);

      store.set("user.data", user);

      router.go('/profile');
    } catch (e: any) {
      store.set('user.error', (e as Error).message)

      console.error(e);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      const user = await this.api.loadAvatar(data);

      store.set("user.data", user);
    } catch (e: any) {
      store.set('user.error', (e as Error).message)
    }
  }

  async updatePassword(data: ProfilePassword) {
    try {
      const user = await this.api.changePassword(data);

      store.set("user.data", user);
    } catch (e: any) {
      store.set('user.error', (e as Error).message)
    }
  }

  async findProfile (data: ProfileSearch) {

    store.set("userSearch", undefined);

    const user = await this.api.searchUser(data);

    store.set("userSearchResults", user);
  }

}

export default new ChatController();
