import BaseAPI from './BaseAPI';
import {Profile, ProfilePassword, ProfileSearch} from "../apiTypes/userTypes";

export class ProfileAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  read(identifier: string): Promise<Profile> {
    return this.http.get(`/${identifier}`);
  }

  update(data: Profile): Promise<Profile> {
    return this.http.put("/profile", data);
  }

  loadAvatar(data: FormData): Promise<Profile> {
    return this.http.put("/profile/avatar", data);
  }

  changePassword(data: ProfilePassword): Promise<any> {
    return this.http.put("/password", data);
  }

  searchUser(data: ProfileSearch): Promise<Profile> {
    return this.http.post("/search", data);
  }

  create = undefined;
  delete = undefined;

}

export default new ProfileAPI();
