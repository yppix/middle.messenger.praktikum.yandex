import Block from '../../../utils/Block';

interface LabelProps {
  message: string;
  for?: string;
  className: Array<string>;
}

export class Label extends Block {
  constructor(props: LabelProps) {
    super('label', props);
  }

  init() {
    if(this.props.for) {
      this.element!.setAttribute("for", this.props.for);
    }
    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `${this.props.message}`;
  }
}
