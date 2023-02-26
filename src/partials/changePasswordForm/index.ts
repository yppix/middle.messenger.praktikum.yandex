import Block from '../../utils/Block';
import {ProfileButtonSet} from "../profileButtonset";
import {ChangePasswordMain} from "../changePasswordMain";

interface ChangePasswordFormProps {
  actionForm: string;
  methodForm: string;
  className: Array<string>;
  events?: {
    click: () => void,
  };
}

export class ChangePasswordForm extends Block {
  constructor(props: ChangePasswordFormProps) {
    super('form', props);
  }

  init() {
    this.children.main = new ChangePasswordMain({
      className: ["profile-edit__password-fieldset"]
    })

    this.children.buttons = new ProfileButtonSet({
      className: ["profile__buttons"],
      type: "edit"
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
  }

  render() {
    return `{{{main}}} {{{buttons}}}`;
  }
}
