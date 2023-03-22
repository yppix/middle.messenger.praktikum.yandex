import Block from '../../../utils/Block';
import {Button} from "../button";
import {Input} from "../field";
import {TitleForm} from "../titleForm";
import {checkField} from "../../../utils/checkFields";
import {removeError} from "../../../utils/removeError";

interface ModalFormProps {
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

export class ModalForm extends Block {
  constructor(props: ModalFormProps) {
    super('form', props);
  }

  init() {

    this.children.title = new TitleForm({
      titleText: this.props.titleText,
      className: ["modal-form__title"]
    })


    this.children.input = new Input({
      nameInput: "title",
      typeInput: "text",
      id: `${this.props.action}-input`,
      className: ["modal-form__input"],
      events: {
        blur: () => checkField(this.props.action),
        focus: () => removeError(this.props.action)
      }
    });

    this.children.button = new Button({
      label: "Add",
      type: "submit",
      className: ["modal-form__button"]
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
    this.element!.setAttribute("id", this.props.id);

  }

  render() {
    return `{{{title}}} {{{input}}} {{{button}}}`;
  }
}
