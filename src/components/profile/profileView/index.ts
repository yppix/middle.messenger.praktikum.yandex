import Block from '../../../utils/Block';
import {ProfileButtonSet} from "../profileButtonset";
import {ProfileViewMain} from "../profileViewMain";
import {withRouter} from "../../../hocs/withRouter";
import withUser from "../../../hocs/withUser";

interface ProfileViewProps {
  className: Array<string>;
}

export class ProfileView extends Block {
  constructor(props: ProfileViewProps) {
    super('div', props);
  }

  init() {
    this.children.main = new ProfileData({
      className: ["profile-view"]
    })

    this.children.buttons = new ProfileButtonSetLinks({
      className: ["profile__buttons"],
      type: "view"
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{main}}} {{{buttons}}}`;
  }
}

export const ProfileData = withUser(ProfileViewMain);

export const ProfileButtonSetLinks = withRouter(ProfileButtonSet);
