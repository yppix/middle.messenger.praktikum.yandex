import Block from '../../utils/Block';
import {LabelForInput} from "../labelInputInside";

interface ChatViewSendFormProps {
  actionForm: string;
  methodForm: string;
  className: Array<string>;
  events: {
    click: () => void,
  };
}

export class ChatViewSendForm extends Block {
  constructor(props: ChatViewSendFormProps) {
    super('form', props);
  }

  init() {

    this.children.sending = new LabelForInput({
      className: ["send-label"],
      inputClass: ["chat-message__input-field"],
      inputPlaceholder: "Type here",
      typeInput: "text",
      nameInput: "message",
      isSvg: true,
      svgId: "send"
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
  }

  render() {
    return `{{{sending}}}`;
  }
}
