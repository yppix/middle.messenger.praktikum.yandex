import Block from '../../../utils/Block';

interface SubtitleProps {
  titleText: string;
  className: Array<string>;
}

export class Subtitle extends Block {
  constructor(props: SubtitleProps) {
    super('h3', props);
  }

  init() {
    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{titleText}}`;
  }
}
