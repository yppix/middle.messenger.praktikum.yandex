import Block from '../../utils/Block';

interface TitleProps {
  titleText: string;
  className: Array<string>;
}

export class Title extends Block {
  constructor(props: TitleProps) {
    super('h1', props);
  }

  init() {
    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{titleText}}`;
  }
}
