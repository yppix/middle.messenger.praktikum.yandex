import Block from '../../utils/Block';
import {ProfileEditForm} from "../../components/profile/profileEditForm";
import {getFormField} from "../../utils/getFormField";
import ProfileController from "../../controllers/ProfileController";
import {Profile} from "../../apiTypes/userTypes";
import AuthController from "../../controllers/AuthController";

interface ProfileEditProps {
  className: string;
}

export class ProfileEdit extends Block {
  constructor(props: ProfileEditProps) {
    super('main', props);
  }

  init() {
    this.children.view = new ProfileEditForm({
      className: ["profile"],
      actionForm: "#",
      methodForm: "post",
      id: "edit-profile",
      events: {
        submit: async (event: SubmitEvent) => {
          event!.preventDefault();

          const form = new FormData(document.getElementById("form-load-avatar") as HTMLFormElement);

          if (getFormField("edit-profile")) {
            await ProfileController.updateProfile(getFormField("edit-profile") as Profile)
            await ProfileController.updateAvatar(form);
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
