import Block from '../../../utils/Block';
import {ProfileButtonSet} from "../../profile/profileButtonset";
import {ChangePasswordMain} from "../changePasswordMain";
import {withRouter} from "../../../hocs/withRouter";
import withUser from "../../../hocs/withUser";

interface ChangePasswordFormProps  {
  actionForm: string;
  methodForm: string;
  className: Array<string>;
  id: string;
  events?: {
    submit: (event: SubmitEvent) => void,
  };
}

export class ChangePasswordForm extends Block {
  constructor(props: ChangePasswordFormProps) {
    super('form', props);
  }

  init() {
    this.children.main = new ChangePasswordData({
      className: ["profile-edit__password-fieldset"]
    })

    this.children.buttons = new ChangePasswordButtonSetLinks({
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

export const ChangePasswordData = withUser(ChangePasswordMain);

export const ChangePasswordButtonSetLinks = withRouter(ProfileButtonSet);
