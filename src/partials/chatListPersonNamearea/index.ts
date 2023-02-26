import Block from '../../utils/Block';
import {LabelP} from "../labelP";

interface ChatListPersonNameareaProps {
  className: Array<string>;
  namePerson: string;
  textPerson: string;
}

export class ChatListPersonNamearea extends Block {
  constructor(props: ChatListPersonNameareaProps) {
    super('div', props);
  }

  init() {
    this.children.name = new LabelP({
      message: this.props.namePerson,
      className: ["chat-nameArea__name"]
    })

    this.children.message = new LabelP({
      message: this.props.textPerson,
      className: ["chat-nameArea__text"]
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{name}}} {{{message}}}`;
  }
}
