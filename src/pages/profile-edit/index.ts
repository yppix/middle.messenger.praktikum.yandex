import Block from '../../utils/Block';
import {ProfileEditForm} from "../../partials/profileEditForm";
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
      methodForm: "post"
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{view}}}`;
  }
}
