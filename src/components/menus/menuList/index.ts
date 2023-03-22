import Block from '../../../utils/Block';
import {MenuListItem} from "../menuListItem";

interface MenuListProps {
  typeMenu: string;
  className: Array<string>;
}

const MENUS: Record<string, Array <string>> = {
  "hamburger-menu": ["new-chat", "new-group-chat","edit-profile","settings","logout"],
  "add-members": [],
  "delete-chat": ["delete-chat"],
  "info-menu": []
}

export class MenuList extends Block {
  constructor(props: MenuListProps) {
    super('ul', props);
  }

  init() {
    this.children.menu = this.renderMenuItem();

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{# each menu}} {{{this}}} {{/each}}`;
  }

  private renderMenuItem() {
    return MENUS[this.props.typeMenu].map(data => {
      return new MenuListItem({
        isOpenModal: false,
        svgId: this.props.typeMenu,
        linkText: data,
        linkClass: `${this.props.typeMenu}__item`,
        className: [`${this.props.typeMenu}__li`],
      })
    })
  }
}
