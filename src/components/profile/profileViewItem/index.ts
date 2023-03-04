import Block from '../../../utils/Block';
import {LabelP} from "../../helpers/labelP";

interface ProfileViewItemProps {
  typeField: string;
  valueField: string;
  className: Array<string>;
}

export class ProfileViewItem extends Block {
  constructor(props: ProfileViewItemProps) {
    super('div', props);
  }

  init() {

    this.children.type = new LabelP({
      className: ["profile-view__name"],
      message: this.props.typeField.replace('_', ' ')
    })

    this.children.value = new LabelP({
      className: ["profile-view__value"],
      message: this.props.valueField
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{type}}}{{{value}}}`;
  }
}
