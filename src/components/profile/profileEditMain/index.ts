import Block from '../../../utils/Block';
import {ProfileEditItem} from "../profileEditItem";
import {UserProfileFields} from "../../../apiTypes/authTypes";
import {ProfileAvatarForm} from "../profileAvatarForm";

interface ProfileEditMainProps {
  className: Array<string>;
}

export class ProfileEditMain extends Block {
  constructor(props: ProfileEditMainProps) {
    super('div', props);
  }

  init() {
    this.children.avatar = new ProfileAvatarForm ({
      id: "form-load-avatar",
      methodForm: "post",
      actionForm: "#"
    })

    this.children.fields = this.getProfileEditFields();

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `<div class="profile-view__avatar">
              <div class="profile-avatar">{{{avatar}}}</div>
            </div>
            <div class="profile-view__fieldset-edit">
            {{#each fields}}
             {{{this}}}
             {{/each}}
             </div>`;
  }

  private getProfileEditFields() {

    let result = Object.keys(this.props).filter(item => UserProfileFields.includes(item));

    return result.map(data => {
      return new ProfileEditItem({
        nameField: data,
        valueLabel:data,
        valueField: this.props[data],
        placeholderInput: data,
        labelClass: "profile-view__item-label",
        inputClass: "profile-view__item-input",
        className: ["profile-view__item-edit"],
        typeInput: "text"
      })
    })
  }
}


