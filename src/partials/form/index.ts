import Block from '../../utils/Block';
import {Button} from "../button";
import {Fieldset} from "../fieldset";
import {TitleForm} from "../titleForm";
import {TitleFormFooter} from "../titleFormFooter";

interface FormProps {
  actionForm: string;
  methodForm: string;
  titleForm: string;
  typeForm: string;
  redirectLink: string;
  formPurpose: string;
  className: Array<string>;
  events: {
    click: () => void,
  };
}

export class Form extends Block {
  constructor(props: FormProps) {
    super('form', props);
  }

  init() {

    this.children.titleForm = new TitleForm({
      titleText: this.props.titleForm,
      className: ["form__title"]
    });

    this.children.titleFormFooter = new TitleFormFooter({
      titleText: this.props.formPurpose,
      typeRedirect:this.props.redirectLink,
      className: ["form__title-footer"],
      events: {
        click: () => console.log('Clicked')
      }
    });

    this.children.button = new Button({
      label: "Enter",
      className: ["button",`form-${this.props.typeForm}__button`],
      events: {
        click: () => console.log('Clicked')
      }
    });

    this.children.fieldset = new Fieldset({
      className: [`form-${this.props.typeForm}__fieldset`],
      typeForm: this.props.typeForm
    });


    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
  }

  render() {
    return `{{{titleForm}}} {{{fieldset}}} {{{button}}} {{{titleFormFooter}}}`;
  }
}
