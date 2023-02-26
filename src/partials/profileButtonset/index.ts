import Block from '../../utils/Block';
import {Button} from "../button";
import {renderDOM} from "../../utils/renderDOM";

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
          console.log("edit")
          renderDOM("editProfile")
        },
      }
    });

    this.children.changePassword = new Button({
      label: "Change password",
      className: ["button", "profile-button__password"],
      events: {
        click: () => renderDOM("changePassword"),
      }
    });

    this.children.save = new Button({
      label: "Save changes",
      className: ["button", "profile-button__edit"],
      events: {
        click: () => renderDOM("profile"),
      }
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    if (this.props.type === "view") {
      return `{{{editProfile}}} {{{changePassword}}}`;
    } else {
      return `{{{save}}}`;
    }
  }
}
