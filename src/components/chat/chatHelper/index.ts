import Block from '../../../utils/Block';

interface ChatHelperProps {
  className: Array<string>;
  text?: string;
}

export class ChatHelper extends Block {
  constructor(props: ChatHelperProps) {
    super('div', props);
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
