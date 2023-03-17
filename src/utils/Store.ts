import { set} from './helpers';
import { EventBus } from './EventBus';
import {User} from "../apiTypes/authTypes";
import {Chat} from "../apiTypes/chatTypes";
import {Profile} from "../apiTypes/userTypes";

export enum StoreEvents {
  UPDATED = 'updated'
}

// @ts-ignore
interface State {
  user?: {
    data?: User;
    error?: string;
    isLoading?: boolean;
  };
  chats?: Chat[];
  selectedChatId?: number;
  //messages?: Record<number, Message[]>,
  userSearch: Profile[];
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.UPDATED, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();
export default store;
