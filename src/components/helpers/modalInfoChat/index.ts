import Block from '../../../utils/Block';
import {Button} from "../button";
import {Input} from "../field";
import {TitleForm} from "../titleForm";
import {removeError} from "../../../utils/removeError";
import {checkField} from "../../../utils/checkFields";
import {SvgIcon} from "../svgIcon";
import {closeModal} from "../../../utils/closeModal";

interface ModalInfoChatFormProps {
  actionForm: string;
  methodForm: string;
  action?: string;
  titleText? : string;
  id: string
  className: Array<string>;
  events: {
    submit: (event: SubmitEvent) => void,
  };
}

export class ModalInfoChatForm extends Block {
  constructor(props: ModalInfoChatFormProps) {
    super('form', props);
  }

  init() {

    this.children.titleUser = new TitleForm({
      titleText: this.props.titleText,
      className: ["modal-form__title"]
    })

    this.children.inputUser = new Input({
      nameInput: "user_id",
      typeInput: "text",
      id: `${this.props.action}__userId-input`,
      className: ["modal-form__input"],
      events: {
        blur: () => checkField("user_id"),
        focus: () => removeError("user_id")
      }
    });

    this.children.button = new Button({
      label: this.props.action === "add-member" ? "Add" : "Remove",
      type: "submit",
      className: ["modal-form__button"]
    });

    this.children.close = new SvgIcon({
      id: "close",
      className: ["icon", "close-modal"],
      events: {
        click: () => closeModal()
      }
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
    this.element!.setAttribute("id", this.props.id);

  }

  render() {
    return `{{{titleChat}}} {{{inputChat}}}{{{titleUser}}}{{{inputUser}}}{{{button}}} {{{close}}}`;
  }
}
