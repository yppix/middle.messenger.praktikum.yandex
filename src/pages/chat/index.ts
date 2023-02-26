import Block from '../../utils/Block';
import {ChatList} from "../../partials/chatList";
import {isChosen} from "../../utils/choseChat";
import {ChatNoMessages} from "../../partials/chatNoMessages";
import {ChatView} from "../../partials/chatView";

interface ChatProps {
  className: string;
  messageView?: boolean;
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super('main', props);
  }

  init() {
    this.children.chatList = new ChatList({
      className: ["chat-list"],
      events: {
        click: () => {
          this.setProps(
            this.props.messageView = true
          )
        }
      }
    })

    this.children.chatPage = this.getChatPage();

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `<div class="chat">{{{chatList}}} {{{chatPage}}}</div>`;
  }

  private getChatPage() {
    if (isChosen()) {
      return new ChatView({
        className: ["chat-view"],
      })
    } else {
      return new ChatNoMessages({
        className: ["chat-view__nothing"],
      });
    }
  }

  // @ts-ignore
  protected componentDidUpdate(oldProps: ChatProps, newProps: ChatProps): boolean {
    this.children.chatPage = this.getChatPage();

    return true;
  }
}
