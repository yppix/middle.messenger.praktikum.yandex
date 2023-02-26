import Block from '../../utils/Block';
import {Input} from "../field";
import {checkField} from "../../utils/checkFields";

interface FieldsetProps {
  className: Array<string>;
  typeForm: string;
}

export class Fieldset extends Block {
  constructor(props: FieldsetProps) {
    super('div', props);
  }

  init() {
    if (this.props.typeForm === "signin") {
      this._addSigninField();
    } else if (this.props.typeForm === "signup") {
      this._addSignupField();
    }

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    if (this.props.typeForm === "signin") {
      return `{{{login}}} {{{password}}}`;
    } else if (this.props.typeForm === "signup") {
      return `{{{firstName}}} {{{secondName}}} {{{login}}} {{{email}}} {{{password}}} {{{phone}}}`;
    } else {
      return '';
    }
  }

  _addSigninField() {
    this.children.login = new Input({
      nameInput: "login",
      typeInput: "text",
      placeholderInput: "Login",
      className: ["form__input"],
      events: {
        blur: () => checkField("login"),
        focus: () => this._removeError("login")
      }
    });

    this.children.password = new Input({
      nameInput: "password",
      typeInput: "password",
      placeholderInput: "Password",
      className: ["form__input"],
      events: {
        blur: () => checkField("password"),
        focus: () => this._removeError("password")
      }
    });
  }

  _addSignupField() {
    this.children.firstName = new Input({
      nameInput: "first_name",
      typeInput: "text",
      placeholderInput: "First name",
      className: ["form__input"],
      events: {
        blur: () => checkField("first_name"),
        focus: () => this._removeError("first_name")
      }
    });

    this.children.secondName = new Input({
      nameInput: "second_name",
      typeInput: "text",
      placeholderInput: "Second name",
      className: ["form__input"],
      events: {
        blur: () => checkField("second_name"),
        focus: () => this._removeError("second_name")
      }
    });

    this.children.login = new Input({
      nameInput: "login",
      typeInput: "text",
      placeholderInput: "Login",
      className: ["form__input"],
      events: {
        blur: () => checkField("login"),
        focus: () => this._removeError("login")
      }
    });

    this.children.email = new Input({
      nameInput: "email",
      typeInput: "email",
      placeholderInput: "Email",
      className: ["form__input"],
      events: {
        blur: () => checkField("email"),
        focus: () => this._removeError("email")
      }
    });

    this.children.password = new Input({
      nameInput: "password",
      typeInput: "password",
      placeholderInput: "Password",
      className: ["form__input"],
      events: {
        blur: () => checkField("password"),
        focus: () => this._removeError("password")
      }
    });

    this.children.phone = new Input({
      nameInput: "phone",
      typeInput: "text",
      placeholderInput: "Phone",
      className: ["form__input"],
      events: {
        blur: () => checkField("phone"),
        focus: () => this._removeError("phone")
      }
    });
  }

  _removeError(fieldName: string) {
    if ((event!.target! as HTMLInputElement).classList.contains('invalid')) {
      (event!.target! as HTMLInputElement).classList.remove('invalid');

      const labels = document.querySelectorAll(`[for=${fieldName}]`);
      if (labels) {
        for (let label of labels) {
          label.remove();
        }
      }
    }
  }
}
