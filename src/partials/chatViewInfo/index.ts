import Block from '../../utils/Block';

interface ChatViewInfoProps {
  className: Array<string>;
}

export class ChatViewInfo extends Block {
  constructor(props: ChatViewInfoProps) {
    super('div', props);
  }

  init() {
    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return ``;
  }
}
