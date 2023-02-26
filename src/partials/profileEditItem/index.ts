import Block from '../../utils/Block';
import {Label} from "../label";
import {Input} from "../field";
interface ProfileEditItemProps {
  nameField: string;
  placeholderInput?: string;
  valueLabel?: string;
  valueField?: string;
  labelClass: string;
  typeInput: string;
  inputClass: string;
  className: Array<string>;
}

export class ProfileEditItem extends Block {
  constructor(props: ProfileEditItemProps) {
    super('div', props);
  }

  init() {

    this.children.type = new Label({
      className: [this.props.labelClass],
      for: this.props.nameField,
      message: this.props.valueLabel
    })

    this.children.input = new Input({
      nameInput: this.props.nameField,
      placeholderInput: this.props.placeholderInput,
      className: [this.props.inputClass],
      typeInput: this.props.typeInput,
      id: this.props.nameField,
      value: this.props.valueField,
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{type}}}{{{input}}}`;
  }
}
