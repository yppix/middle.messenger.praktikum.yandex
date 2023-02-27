import Block from '../../utils/Block';
import {ProfileEditForm} from "../../components/profile/profileEditForm";
import {getFormField} from "../../utils/getFormField";
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
        submit: (event: SubmitEvent) => {
          event!.preventDefault();
          if (getFormField("edit-profile")) {
            console.log(getFormField("edit-profile"))
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
