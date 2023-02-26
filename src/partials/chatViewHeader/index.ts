import Block from '../../utils/Block';
import {ChatHelper} from "../chatHelper";
import {ChatListPersonNamearea} from "../chatListPersonNamearea";
import {ChatViewInfo} from "../chatViewInfo";
import {getChosenChat} from "../../utils/choseChat";

interface ChatViewHeaderProps {
  className: Array<string>;
  namePerson?: string;
  textPerson?:string;
}

export class ChatViewHeader extends Block {
  constructor(props: ChatViewHeaderProps) {
    super('div', props);
  }

  init() {
    this.getHeaderProps();

    this.children.avatar = new ChatHelper({
      className: ["chat-avatar"]
    });

    this.children.namearea = new ChatListPersonNamearea({
      className: ["chat-view__nameArea-info"],
      namePerson: this.props.namePerson,
      textPerson: this.props.textPerson
    });


    this.children.info = new ChatViewInfo({
      className: ["chat-view__info"]
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return ` <div class="chat-view__nameArea"> {{{avatar}}} {{{namearea}}}</div> <div class="chat-view__info">{{{info}}}</div>`;
  }

  private getHeaderProps():void {
    const chosenChat = getChosenChat();
    this.props.namePerson = chosenChat.namePerson;
    this.props.textPerson = chosenChat.textPerson;
  }
}
