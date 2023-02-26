import Block from '../../utils/Block';

interface ButtonProps {
  label: string;
  className: Array<string>;
  events: {
    click: () => void,
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{label}}`;
  }
}
