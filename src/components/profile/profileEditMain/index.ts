import Block from '../../../utils/Block';
import {PERSON} from "../../../static/data/data";
import {Input} from "../../helpers/field";
import {LabelStaticInside} from "../../helpers/labelStaticInside";
import {ProfileEditItem} from "../profileEditItem";
interface ProfileEditMainProps {
  className: Array<string>;
}

export class ProfileEditMain extends Block {
  constructor(props: ProfileEditMainProps) {
    super('div', props);
  }

  init() {
    this.children.avatar = new Input ({
      id: "profile__load-avatar-input",
      nameInput: "avatar",
      className: ["load-avatar-input"],
      typeInput: "file",
    })

    this.children.labelFile = new LabelStaticInside ({
      for: "profile__load-avatar-input",
      svgId : "upload-big",
      typeInside: "svg",
      className: ["load-avatar"]
    })

    this.children.fields = this.getProfileEditFields();

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `<div class="profile-view__avatar">
              <div class="profile-avatar">{{{avatar}}} {{{labelFile}}}</div>
            </div>
            <div class="profile-view__fieldset-edit">
            {{#each fields}}
             {{{this}}}
             {{/each}}
             </div>`;
  }

  private getProfileEditFields() {
    let result = Object.keys(PERSON).map(function (key) {
      // @ts-ignore
      return [key, PERSON[key]];
    });

    return result.map(data => {
      return new ProfileEditItem({
        nameField: data[0],
        valueLabel: data[0],
        valueField: data[1],
        placeholderInput: data[0],
        labelClass: "profile-view__item-label",
        inputClass: "profile-view__item-input",
        className: ["profile-view__item-edit"],
        typeInput: "text"
      })
    })
  }
}


