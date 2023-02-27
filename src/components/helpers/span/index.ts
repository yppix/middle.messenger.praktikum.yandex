import Block from '../../../utils/Block';

interface SpanProps {
  className: Array<string>;
  text?: string;
  events?: {
    click: () => void,
  };
}

export class Span extends Block {
  constructor(props: SpanProps) {
    super('span', props);
  }

  init() {
    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    if(this.props.text) {
      return `${this.props.text}`;
    }
    return ``;
  }
}
