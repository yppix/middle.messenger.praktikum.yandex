import Block from '../../../utils/Block';
import {PASSWORD_FIELDS} from "../../../static/data/data";
import {ChangePasswordEditItem} from "../changePasswordEditItem";
interface ChangePasswordMainProps {
  className: Array<string>;
}

export class ChangePasswordMain extends Block {
  constructor(props: ChangePasswordMainProps) {
    super('div', props);
  }

  init() {
    this.children.fields = this.getChangePasswordEditFields();

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{#each fields}} {{{this}}} {{/each}}`;
  }

  private getChangePasswordEditFields() {
    let result = Object.keys(PASSWORD_FIELDS).map(function (key) {
      // @ts-ignore
      return [key, PASSWORD_FIELDS[key]];
    });

    return result.map(data => {
      return new ChangePasswordEditItem({
        nameField: data[0],
        valueLabel: data[1],
        labelClass: "profile-edit__password-label",
        inputClass: "edit-password",
        className: ["profile-view__item-edit"],
        typeInput: "password",
        placeholderInput: data[1],
      })
    })
  }
}


