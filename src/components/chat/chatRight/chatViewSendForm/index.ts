import Block from '../../../../utils/Block';
import {LabelForInput} from "../../../helpers/labelInputInside";

interface ChatViewSendFormProps {
  actionForm: string;
  methodForm: string;
  className: Array<string>;
  id: string;
  events: {
    submit: (event: SubmitEvent) => void,
  };
}

export class ChatViewSendForm extends Block {
  constructor(props: ChatViewSendFormProps) {
    super('form', props);
  }

  init() {

    this.children.sending = new LabelForInput({
      className: ["send-label"],
      classSvg: ["icon", "send"],
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
    this.element!.setAttribute("id", this.props.id);
  }

  render() {
    return `{{{sending}}}`;
  }
}
