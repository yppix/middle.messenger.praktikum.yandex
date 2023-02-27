import Block from '../../../utils/Block';
import {ProfileButtonSet} from "../profileButtonset";
import {ProfileViewMain} from "../profileViewMain";

interface ProfileViewProps {
  className: Array<string>;
}

export class ProfileView extends Block {
  constructor(props: ProfileViewProps) {
    super('div', props);
  }

  init() {
    this.children.main = new ProfileViewMain({
      className: ["profile-view"]
    })

    this.children.buttons = new ProfileButtonSet({
      className: ["profile__buttons"],
      type: "view"
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{main}}} {{{buttons}}}`;
  }

}
