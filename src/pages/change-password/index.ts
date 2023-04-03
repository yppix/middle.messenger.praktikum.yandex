import Block from '../../utils/Block';
import {ChangePasswordForm} from "../../components/changePassword/changePasswordForm";
import {getFormField} from "../../utils/getFormField";
import ProfileController from "../../controllers/ProfileController";
import {ProfilePassword} from "../../apiTypes/userTypes";
import AuthController from "../../controllers/AuthController";
import Router from "../../utils/Router";
import {Routes} from "../../static/route/route";

interface ChangePasswordProps {
  className: string;
}

export class ChangePassword extends Block {
  constructor(props: ChangePasswordProps) {
    super('main', props);
  }

  init() {
    // @ts-ignore
    this.children.view = new ChangePasswordForm({
      className: ["profile"],
      actionForm: "#",
      methodForm: "post",
      id: "change-password",
      events: {
        submit: (event: SubmitEvent) => {
          event!.preventDefault();
          if (getFormField("change-password")) {
            ProfileController.updatePassword(getFormField("change-password") as ProfilePassword);
            AuthController.logout()
            Router.go(Routes.Index)
          }
        }
      }
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{view}}}`;
  }
}
