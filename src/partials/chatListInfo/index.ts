import Block from '../../utils/Block';
import {ChatHelper} from "../chatHelper";
import {LabelP} from "../labelP";

interface ChatListInfoProps {
  className: Array<string>;
}

export class ChatListInfo extends Block {
  constructor(props: ChatListInfoProps) {
    super('div', props);
  }

  init() {
    this.children.notification = new ChatHelper({
      className: ["chat-notification"],
      text: "1"
    });

    this.children.time  = new LabelP({
      className: ["chat-info__time"],
      message: "18.99"
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `<div class="chat-info__top"> {{{notifictaion}}} </div> <div class="chat-info__bottom"> {{{time}}}</div>`;
  }
}
