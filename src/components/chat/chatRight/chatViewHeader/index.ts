import Block from '../../../../utils/Block';
import {ChatHelper} from "../../chatHelper";
import {ChatListPersonNamearea} from "../../chatLeft/chatListPersonNamearea";
import {ChatViewInfo} from "../chatViewInfo";

interface ChatViewHeaderProps {
  className: Array<string>;
  selectedChatId?: number;
  namePerson?: string;
  textPerson?:string;
}

export class ChatViewHeader extends Block {
  constructor(props: ChatViewHeaderProps) {
    super('div', props);
  }

  init() {
    this.children.avatar = new ChatHelper({
      className: ["chat-avatar"]
    });

    this.children.namearea = new ChatListPersonNamearea({
      className: ["chat-view__nameArea-info"],
      namePerson: this.props.namePerson,
      textPerson: this.props.textPerson
    });


    this.children.info = new ChatViewInfo({
      className: ["chat-view__info"],
      selectedChatId: this.props.selectedChatId
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return ` <div class="chat-view__nameArea"> {{{avatar}}} {{{namearea}}}</div> <div class="chat-view__info">{{{info}}}</div>`;
  }
}
