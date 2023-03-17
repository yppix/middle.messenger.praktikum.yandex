import Block from '../../../utils/Block';
import {ChatHelper} from "../../chat/chatHelper";
import {PERSON} from "../../../static/data/data";
import {ProfileViewItem} from "../profileViewItem";

interface ProfileViewMainProps {
  className: Array<string>;
}

export class ProfileViewMain extends Block {
  constructor(props: ProfileViewMainProps) {
    super('div', props);
  }

  init() {
    this.children.avatar = new ChatHelper({
      className: ["profile-avatar"]
    })

    this.children.fields = this.getProfileFields();

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `<div class="profile-view__avatar"> {{{avatar}}} </div> <div class="profile-view__fieldset">{{#each fields}} {{{this}}} {{/each}} </div> {{{buttons}}}`;
  }

  private getProfileFields() {

    console.log(this.props)
    // console.log(this.props[field.name as keyof User])

    let result = Object.keys(PERSON).map(function (key) {
      // @ts-ignore
      return [key, PERSON[key]];
    });

    return result.map(data => {
      return new ProfileViewItem({
        typeField: data[0],
        valueField: data[1],
        className: ["profile-view__item"],
      })
    })
  }
}
