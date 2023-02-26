import Block from '../../utils/Block';
import {LabelForInput} from "../labelInputInside";

interface ChatSearchFormProps {
  actionForm: string;
  methodForm: string;
  className: Array<string>;
  events?: {
    click: () => void,
  };
}

export class ChatSearchForm extends Block {
  constructor(props: ChatSearchFormProps) {
    super('form', props);
  }

  init() {

    this.children.label = new LabelForInput({
      className: ["search-label"],
      inputClass: ["chat-input"],
      inputPlaceholder: "Search here",
      typeInput: "text",
      nameInput: "search",
      svgId: "search",
      isSvg: true,
      classSvg: ["icon", "search"]
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
  }

  render() {
    return `{{{ label }}}`;
  }
}
