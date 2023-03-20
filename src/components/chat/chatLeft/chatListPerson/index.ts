import Block from '../../../../utils/Block';
import {ChatListPersonNamearea} from "../chatListPersonNamearea";
import {ChatHelper} from "../../chatHelper";
import {ChatListInfo} from "../chatListInfo";

interface ChatListPersonProps {
  namePerson: string;
  textPerson: string;
  notification: number;
  time: string;
  isReaden: boolean;
  id?: number;
  className: Array<string>;
  events?: {
    click: () => void
  }
}

export class ChatListPerson extends Block {
  constructor(props: ChatListPersonProps) {
    super('div', props);
  }

  init() {
    this.children.avatar = new ChatHelper({
      className: ["chat-avatar"]
    });

    this.children.namearea = new ChatListPersonNamearea({
      className: ["chat-nameArea"],
      namePerson: this.props.namePerson,
      textPerson: this.props.textPerson
    });

    this.children.info = new ChatListInfo({
      className: ["chat-info"],
      isReaden: this.props.isReaden,
      notification: this.props.notification
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{avatar}}} {{{namearea}}} {{{info}}}`;
  }
}
