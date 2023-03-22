import Block from '../../../utils/Block';
import {ChatHelper} from "../../chat/chatHelper";
import {ProfileViewItem} from "../profileViewItem";
import {UserProfileFields} from "../../../apiTypes/authTypes";

interface ProfileViewMainProps {
  className: Array<string>;
}

export class ProfileViewMain extends Block {
  constructor(props: ProfileViewMainProps) {
    super('div', props);
  }

  init() {
    if (this.props.avatar) {
      this.children.avatar = new ChatHelper({
        className: ["profile-avatar"],
        img: `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`
      })
    } else {
      this.children.avatar = new ChatHelper({
        className: ["profile-avatar"]
      })
    }

    this.children.fields = this.getProfileFields();

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `<div class="profile-view__avatar"> {{{avatar}}} </div> <div class="profile-view__fieldset">{{#each fields}} {{{this}}} {{/each}} </div>`;
  }

  private getProfileFields() {

    // @ts-ignore
    let result = Object.keys(this.props).filter(item => UserProfileFields.includes(item));

    return result.map(data => {
      return new ProfileViewItem({
        typeField: data,
        valueField: this.props[data],
        className: ["profile-view__item"],
      })
    })
  }
}
