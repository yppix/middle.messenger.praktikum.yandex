import Block from '../../utils/Block';
import {ChatListHeader} from "../chatListHeader";
import {ChatListPerson} from "../chatListPerson";
import {CHATS} from "../../static/data/data";
import {choseChat, colorChosenChat} from "../../utils/choseChat";


interface ChatListProps {
  className: Array<string>;
  events: {
    click: () => void;
  }
}

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super('div', props);
  }

  init() {
    this.children.header = new ChatListHeader({
      className: ["chat-list__header"]
    });

    this.children.chats = this.createChats();

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{header}}} {{#each chats }} {{{this}}} {{/each}}`;
  }

  private createChats() {
    return CHATS.map(data => {
      return new ChatListPerson({
        namePerson: data.namePerson,
        textPerson: data.textPerson,
        notification: data.notification,
        time: data.time,
        id: data.id,
        isReaden: data.isReaden,
        className: ["chat-list__person"],
        events: {
          click: () => {
            choseChat(data.id)
            colorChosenChat();
          }
        }
      });
    })
  }
}
