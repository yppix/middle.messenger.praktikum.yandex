import Block from '../../../utils/Block';
import {ProfileButtonSet} from "../profileButtonset";
import {ProfileEditMain} from "../profileEditMain";

interface ProfileEditFormProps {
  actionForm: string;
  methodForm: string;
  className: Array<string>;
  id: string;
  events?: {
    submit: (event: SubmitEvent) => void,
  };
}

export class ProfileEditForm extends Block {
  constructor(props: ProfileEditFormProps) {
    super('form', props);
  }

  init() {
    this.children.main = new ProfileEditMain({
      className: ["profile-view"]
    })

    this.children.buttons = new ProfileButtonSet({
      className: ["profile__buttons"],
      type: "edit"
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
    this.element!.setAttribute("id", this.props.id);

  }

  render() {
    return `{{{main}}} {{{buttons}}}`;
  }

}
