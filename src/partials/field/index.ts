import Block from '../../utils/Block';

interface InputProps {
  nameInput: string;
  placeholderInput?: string;
  className: Array<string>;
  typeInput: string;
  id?: string;
  value?: string;
  events?: {
    blur: () => void
    focus: () => void
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  init() {

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("name", this.props.nameInput);
    if(this.props.id) {
      this.element!.setAttribute("id", this.props.id);
    }
    if(this.props.value) {
      this.element!.setAttribute("value", this.props.value);
    }
    if(this.props.placeholderInput) {
      this.element!.setAttribute("placeholder", this.props.placeholderInput);
    }
    this.element!.setAttribute("type", this.props.typeInput);

  }

  render() {
    return ``;
  }
}
