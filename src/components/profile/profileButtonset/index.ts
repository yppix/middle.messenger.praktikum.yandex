import Block from '../../../utils/Block';
import {Button} from "../../helpers/button";
import {Routes} from "../../../static/route/route";

interface ProfileButtonsetProps {
  type: string;
  className: Array<string>;
}

export class ProfileButtonSet extends Block {
  constructor(props: ProfileButtonsetProps) {
    super('div', props);
  }

  init() {
    this.children.editProfile = new Button({
      label: "Edit",
      className: ["button", "profile-button__edit"],
      events: {
        click: () => {
          this.props.router.go(Routes.ProfileEdit);
          },
      }
    });

    this.children.return = new Button({
      label: "Return",
      className: ["button", "profile-button__edit"],
      events: {
        click: () => {
          this.props.router.go(Routes.Chats);
        },
      }
    });

    this.children.changePassword = new Button({
      label: "Change password",
      className: ["button", "profile-button__password"],
      events: {
        click: () => {
          this.props.router.go(Routes.Password);
        },
      }
    });

    this.children.save = new Button({
      label: "Save changes",
      type: "submit",
      className: ["button", "profile-button__edit"]
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    if (this.props.type === "view") {
      return `{{{editProfile}}} {{{changePassword}}} {{{return}}}`;
    } else {
      return `{{{save}}}`;
    }
  }
}
