import Block from '../../utils/Block';
import {SvgIcon} from "../svgIcon";

interface ChatViewTimeProps {
  time: string;
  className: Array<string>;
  classSpan: string;
}

export class ChatViewTime extends Block {
  constructor(props: ChatViewTimeProps) {
    super('p', props);
  }

  init() {
    this.children.svg = new SvgIcon({
      id: "double-check",

    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `<span class=${this.props.classSpan}>{{{svg}}}</span> {{{this.props.time}}}`;
  }
}
