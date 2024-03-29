import Block from '../../../utils/Block';
import {Input} from "../field";
import {SvgIcon} from "../svgIcon";
import MessagesController from "../../../controllers/MessagesController";

interface LabelForInputProps {
  className: Array<string>;
  inputClass: Array<string>;
  inputPlaceholder: string,
  typeInput: string;
  nameInput: string;
  svgId?: string;
  id?: string;
  value?: string;
  isSvg: boolean;
  idChat?: number;
  classSvg?: Array<string>;
}

export class LabelForInput extends Block {
  constructor(props: LabelForInputProps) {
    super('label', props);
  }

  init() {
    if (this.props.isSvg) {
      this.children.icon = new SvgIcon({
        className: this.props.classSvg,
        id: this.props.svgId,
        events: {
          click: () => {
            const message = document.getElementById("send-message-input") as HTMLInputElement;
            if (message!.value) {
              MessagesController.sendMessage(this.props.idChat, message!.value)
              message!.value = "";
            }
          }
        }
      });
    }

    this.children.input = new Input({
      nameInput: this.props.nameInput,
      placeholderInput: this.props.inputPlaceholder,
      className: this.props.inputClass,
      typeInput: this.props.typeInput,
      id: this.props.id,
      value: this.props.value
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    if(this.props.isSvg) {
      return `{{{icon}}} {{{input}}}`;
    }
    return `{{{input}}}`;
  }
}
