import Block from '../../utils/Block';
import {ChangePasswordForm} from "../../partials/changePasswordForm";
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
      methodForm: "post"
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{view}}}`;
  }
}
