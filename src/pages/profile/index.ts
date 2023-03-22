import Block from '../../utils/Block';
import {ProfileView} from "../../components/profile/profileView";
import withUser from "../../hocs/withUser";

interface ProfileProps {
  className: string;
}

export class Profile extends Block {
  constructor(props: ProfileProps) {
    super('main', props);
  }

  init() {
    this.children.view = new ProfileViewData({
      className: ["profile"]
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{view}}}`;
  }

}

export const ProfileViewData = withUser(ProfileView);
