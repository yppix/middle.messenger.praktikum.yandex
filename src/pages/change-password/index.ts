import Block from '../../utils/Block';
import {ChangePasswordForm} from "../../components/changePassword/changePasswordForm";
import {getFormField} from "../../utils/getFormField";
interface ChangePasswordProps {
  className: string;
}

export class ChangePassword extends Block {
  constructor(props: ChangePasswordProps) {
    super('main', props);
  }

  init() {
    this.children.view = new ChangePasswordForm({
      className: ["profile"],
      actionForm: "#",
      methodForm: "post",
      id: "change-password",
      events: {
        submit: (event: SubmitEvent) => {
          event!.preventDefault();
          if (getFormField("change-password")) {
            console.log(getFormField("change-password"))
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
