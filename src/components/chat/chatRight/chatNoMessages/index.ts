import Block from '../../../../utils/Block';
import {Title} from "../../../helpers/title";

interface ChatNoMessagesProps {
  className: Array<string>;
}

export class ChatNoMessages extends Block {
  constructor(props: ChatNoMessagesProps) {
    super('div', props);
  }

  init() {
    this.children.title = new Title({
      titleText: "Choose your chat",
      className: ["chat-view__title"]
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{{title}}}`;
  }
}
