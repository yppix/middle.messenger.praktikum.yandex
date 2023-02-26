import Block from '../../utils/Block';

interface LabelPProps {
  message: string;
  className: Array<string>;
}

export class LabelP extends Block {
  constructor(props: LabelPProps) {
    super('p', props);
  }

  init() {
    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `${this.props.message}`;
  }
}
