import Block from '../../utils/Block';
import search from '../../static/icons/search.svg'

interface SvgIconProps {
  className?: Array <string>;
  id: string;
}

export class SvgIcon extends Block {
  constructor(props: SvgIconProps) {
    super('svg', props);
  }

  init() {
    if(this.props.className) {
      this.props.className.forEach((element: string) => this.element!.classList.add(element))
    }
  }

  render() {
    console.log(search)
     return `<use href="${search}"></use>`;
  }
}
