import Block from '../../../../utils/Block';
import {ChatViewHeader} from "../chatViewHeader";
import {ChatViewMessages} from "../chatViewMessages";
import {ChatViewSendForm} from "../chatViewSendForm";
import {getFormField} from "../../../../utils/getFormField";

interface ChatViewProps {
  className: Array<string>;
}

export class ChatView extends Block {
  constructor(props: ChatViewProps) {
    super('div', props);
  }

  init() {
    this.children.header = new ChatViewHeader({
      className: ["chat-view__header"]
    });

    this.children.messageList = new ChatViewMessages({
      className: ["chat-view__messages"]
    });

    this.children.send = new ChatViewSendForm ({
      className: ["chat-view__messages"],
      methodForm: "post",
      actionForm: "#",
      id: "send",
      events: {
        submit: () => {
          event!.preventDefault();
          if (getFormField("send")) {
            console.log(getFormField("send"))
          }
        }
      }
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{{header}}} {{{messageList}}} {{{send}}}`;
  }
}
