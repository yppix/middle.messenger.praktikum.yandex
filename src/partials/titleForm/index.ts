import Block from '../../utils/Block';

interface TitleFormProps {
  titleText: string;
  className: Array<string>;
}

export class TitleForm extends Block {
  constructor(props: TitleFormProps) {
    super('p', props);
  }

  init() {
    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{titleText}}`;
  }
}
