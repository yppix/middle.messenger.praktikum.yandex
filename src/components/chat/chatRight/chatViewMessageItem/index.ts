import Block from '../../../../utils/Block';
import {Span} from "../../../helpers/span";
import {ChatViewTime} from "../chatViewMessageItemTime";

interface ChatViewMessageItemProps {
  className: Array<string>;
  textMessage: string;
  classMessage: string;
  classTime: string;
  time: string;
  visibility: string;
}

export class ChatViewMessageItem extends Block {
  constructor(props: ChatViewMessageItemProps) {
    super('div', props);
  }

  init() {
    this.children.text = new Span({
      className: [this.props.classMessage],
      text: this.props.textMessage
    });

    this.children.info = new ChatViewTime({
      className: [this.props.classTime],
      classSpan: this.props.visibility,
      time: this.props.time,
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{{text}}} {{{info}}}`;
  }

}
