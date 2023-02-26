import Block from '../../utils/Block';
import {Input} from "../field";
import {MenuList} from "../menuList";
import {LabelStaticInside} from "../labelStaticInside";

interface MenuProps {
  typeMenu: string;
  className: Array<string>;
}

export class Menu extends Block {
  constructor(props: MenuProps) {
    super('div', props);
  }

  init() {
    this.children.input = new Input({
      nameInput: `${this.props.typeMenu}__toggle`,
      id: `${this.props.typeMenu}__toggle`,
      typeInput: "checkbox",
      className: ["hamburger-menu__toggle"]
    })

    this.children.label = new LabelStaticInside({
      typeMenu: "hamburger-menu",
      for: "hamburger-menu__toggle",
      typeInside: "span",
      className: ["hamburger-menu__btn"],
      classNameInside: "hamburger-menu__span"
    })

    this.children.menuList = new MenuList ({
      typeMenu: "hamburger-menu",
      className: ["hamburger-menu__list"]
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{input}}} {{{label}}} {{{menuList}}}`;
  }
}
