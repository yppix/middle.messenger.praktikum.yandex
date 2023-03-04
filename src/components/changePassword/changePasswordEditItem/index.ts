import Block from '../../../utils/Block';
import {Label} from "../../helpers/label";
import {Input} from "../../helpers/field";
import {checkField} from "../../../utils/checkFields";
import {removeError} from "../../../utils/removeError";
interface ChangePasswordEditItemProps {
  nameField: string;
  placeholderInput?: string;
  valueLabel?: string;
  valueField?: string;
  labelClass: string;
  typeInput: string;
  inputClass: string;
  className: Array<string>;
}

export class ChangePasswordEditItem extends Block {
  constructor(props: ChangePasswordEditItemProps) {
    super('div', props);
  }

  init() {

    this.children.type = new Label({
      className: [this.props.labelClass],
      for: this.props.nameField,
      message: this.props.valueLabel.replace('_', ' ')
    })

    this.children.input = new Input({
      nameInput: this.props.nameField,
      placeholderInput: this.props.placeholderInput,
      className: [this.props.inputClass],
      typeInput: this.props.typeInput,
      id: this.props.nameField,
      value: this.props.valueField,
      events: {
        blur: () => checkField(this.props.nameField),
        focus: () => removeError(this.props.nameField)
      }
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{type}}}{{{input}}}`;
  }
}
