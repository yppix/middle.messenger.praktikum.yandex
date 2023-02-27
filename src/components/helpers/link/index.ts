import Block from '../../../utils/Block';

interface LinkProps {
  linkText: string;
  className: Array<string>;
  events?: {
    click: () => void,
  };
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('a', props);
  }

  init() {
    if(this.props.linkHref) {
      this.element!.setAttribute("href", this.props.linkHref);
    }

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{linkText}}`;
  }
}
