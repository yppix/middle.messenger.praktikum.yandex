import { set} from './helpers';
import { EventBus } from './EventBus';
import {User} from "../apiTypes/authTypes";
import {Chat} from "../apiTypes/chatTypes";
import {Profile} from "../apiTypes/userTypes";
import {Message} from "../controllers/MessagesController";

export enum StoreEvents {
  UPDATED = 'updated'
}

// @ts-ignore
export interface State {
  user?: {
    data?: User;
    error?: string;
    isLoading?: boolean;
  };
  chats?: {
    list: Chat[],
    isLoading: boolean
  };
  selectedChatId?: number;
  messages?: Record<number, Message[]>,
  userSearch: Profile[];
  error?: string;
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
