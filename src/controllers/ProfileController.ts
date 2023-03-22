import {ProfileAPI} from "../api/ProfileAPI";
import router from "../utils/Router";
import store from "../utils/Store";
import {Profile, ProfilePassword, ProfileSearch} from "../apiTypes/userTypes";
import {Routes} from "../static/route/route";
import AuthController from "./AuthController";

class ProfileController {
  private readonly api: ProfileAPI;

  constructor() {
    this.api = new ProfileAPI();
  }

  async updateProfile(data: Profile) {
    try {
      await this.api.update(data);
      await AuthController.fetchUser();
      router.go(Routes.Profile);
    } catch (e: any) {
      store.set('user.error', (e as Error))
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.loadAvatar(data);
      await AuthController.fetchUser();
    } catch (e: any) {
      store.set('user.error', (e as Error))
    }
  }

  async updatePassword(data: ProfilePassword) {
    try {
      const user = await this.api.changePassword(data);

      store.set("user.data", user);
    } catch (e: any) {
      store.set('user.error', e as Error)
    }
  }

  async findProfile (data: ProfileSearch) {
    store.set("userSearch", undefined);

    try {
      const user = await this.api.searchUser(data);

      store.set("userSearchResults", user);
    } catch (e: any) {
      store.set('user.error', e as Error)
    }
  }

}

export default new ProfileController();
