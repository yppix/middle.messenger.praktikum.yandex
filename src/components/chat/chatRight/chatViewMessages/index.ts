import Block from '../../../../utils/Block';
import {ChatViewMessageItem} from "../chatViewMessageItem";
import {Title} from "../../../helpers/title";
import {Message} from "../../../../controllers/MessagesController";
import {isEqual} from "../../../../utils/helpers";

interface ChatViewMessagesProps {
  className: Array<string>;
  idChat?: number;
  noMessages?: boolean;
}

export class ChatViewMessages extends Block {
  constructor(props: ChatViewMessagesProps) {
    super('div', props);
  }

  init() {
    console.log(this.props)
    console.log(this.props.messages)


    const findedChat = this.props.messages[this.props.idChat] ?? null;
    if(!findedChat) {
      this.props.noMessages = true;
    } else {
      const messages = this.props.messages[this.props.idChat];
      this.props.noMessages = messages.length === 0;
    }

    if(this.props.noMessages) {
      this.children.title = new Title({
        titleText: "No message here yet",
        className: ["chat-view__title", "chat-view__title-noMessages"]
      });
    }

    this.children.messages = this.getMessages();
    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    if(this.props.noMessages) {
      return `{{{title}}}`;
    } else {
      return `{{#each messages}} {{{this}}} {{/each}}`;
    }
  }

  protected componentDidUpdate(oldProps: ChatViewMessagesProps, newProps: ChatViewMessagesProps): boolean {

    if (!isEqual(oldProps, newProps)) {
      // @ts-ignore
      this.props.noMessages = newProps.messages[this.props.idChat]?.length === 0;
      this.children.messages = this.getMessages();
      return true;
    }
    return false;
  }

  private getMessages() {

    const messages = this.props.messages[this.props.idChat] ?? 0;

    if(messages.length !== 0 || messages === 0) {
      this.props.noMessages = false;

      return messages.map((data: Message) => {
        const userId = this.props.userId;

        const opponentClass = userId !== data.user_id ? "message-opponent" : "message-personal";
        const visibilityClass = userId !== data.user_id ? "is-read-hidden" : "is-read-visible";


        return new ChatViewMessageItem({
          className: ["chat-message", opponentClass],
          textMessage: data.content,
          classMessage: "chat-message__text",
          classTime: "chat-message__time",
          time: data.time,
          visibility: visibilityClass
        });
      })
    } else {

      return new Title({
        titleText: "No message here yet",
        className: ["chat-view__title"]
      });
    }
  }
}
