import Block from '../../utils/Block';
import {CHAT_MESSAGES} from "../../static/data/data";
import {ChatViewMessageItem} from "../chatViewMessageItem";

interface ChatViewMessagesProps {
  className: Array<string>;
}

export class ChatViewMessages extends Block {
  constructor(props: ChatViewMessagesProps) {
    super('div', props);
  }

  init() {
    this.children.messages = this.getMessages();

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{#each messages}} {{{this}}} {{/each}}`;
  }

  private getMessages() {
    return CHAT_MESSAGES.map(data => {

      const opponentClass = data.isOpponent ? "message-opponent" : "message-personal";
      const visibilityClass = data.isOpponent ? "is-read-hidden" : "is-read-visible";


      return new ChatViewMessageItem({
        className: ["chat-message", opponentClass],
        textMessage: data.text,
        classMessage: "chat-message__text",
        classTime: "chat-message__time",
        time: data.timeMessage,
        visibility: visibilityClass
      });
    })
  }
}
