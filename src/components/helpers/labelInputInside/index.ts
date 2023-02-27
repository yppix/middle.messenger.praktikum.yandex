import Block from '../../../utils/Block';
import {Input} from "../field";
import {SvgIcon} from "../svgIcon";
import {checkField} from "../../../utils/checkFields";
import {removeError} from "../../../utils/removeError";

interface LabelForInputProps {
  className: Array<string>;
  inputClass: Array<string>;
  inputPlaceholder: string,
  typeInput: string;
  nameInput: string;
  svgId?: string;
  id?: string;
  value?: string;
  isSvg: boolean;
  classSvg?: Array<string>;
}

export class LabelForInput extends Block {
  constructor(props: LabelForInputProps) {
    super('label', props);
  }

  init() {
    if (this.props.isSvg) {
      this.children.icon = new SvgIcon({
        className: this.props.classSvg,
        id: this.props.svgId
      });
    }

    this.children.input = new Input({
      nameInput: this.props.nameInput,
      placeholderInput: this.props.inputPlaceholder,
      className: this.props.inputClass,
      typeInput: this.props.typeInput,
      id: this.props.id,
      value: this.props.value,
      events: {
        blur: () => checkField(this.props.nameInput),
        focus: () => removeError(this.props.nameInput)
      }
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    if(this.props.isSvg) {
      return `{{{icon}}} {{{input}}}`;
    }
    return `{{{input}}}`;
  }
}
