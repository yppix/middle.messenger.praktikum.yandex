import Block from '../../../utils/Block';
import {SvgIcon} from "../../helpers/svgIcon";
import {Link} from "../../helpers/link";
import {renderDOM} from "../../../utils/renderDOM";

interface MenuListItemProps {
  svgId: string;
  linkText: string;
  linkClass: string;
  className: Array<string>;
}

export class MenuListItem extends Block {
  constructor(props: MenuListItemProps) {
    super('li', props);
  }

  init() {
    this.children.toggle = new SvgIcon({
      id: this.props.linkText,
      className: ["icon", this.props.linkText]
    })

    this.children.link = new Link({
      linkText: this.props.linkText,
      className: [this.props.linkClass]
    })

    if (this.props.linkText === "edit-profile") {
      this.children.link = new Link({
        linkText: this.props.linkText,
        className: [this.props.linkClass],
        events: {
          click: () => renderDOM("profile")
        }
      })
    }

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{toggle}}} {{{link}}}`;
  }

}
