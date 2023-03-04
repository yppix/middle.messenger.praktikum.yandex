import Block from '../../../utils/Block';
import {Input} from "../../helpers/field";
import {MenuList} from "../menuList";
import {LabelStaticInside} from "../../helpers/labelStaticInside";
import {MenuBlock} from "../menuBlock";
import {ModalError} from "../../helpers/modalError";

interface MenuProps {
  typeMenu: string;
  blockInside: string;
  typeInside: string;
  svgId? : string;
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
      className: [`${this.props.typeMenu}__toggle`]
    })

    this.children.label = new LabelStaticInside({
      typeMenu: `${this.props.typeMenu}`,
      for: `${this.props.typeMenu}__toggle`,
      typeInside: this.props.typeInside,
      className: [`${this.props.typeMenu}__btn`],
      classNameInside: `${this.props.typeMenu}__span`,
      svgId: this.props.svgId
    })

    if(this.props.blockInside === "list") {
      this.children.menuList = new MenuList ({
        typeMenu: `${this.props.typeMenu}`,
        className: [`${this.props.typeMenu}__list`]
      })
    } else {
      this.children.menuList = new MenuBlock ({
        className: [`${this.props.typeMenu}__block`],
        typeMenu: this.props.typeMenu
      })

      this.children.modalError = new ModalError({
        className: [`${this.props.typeMenu}__modal`]
      })
    }



    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{modalError}}} {{{input}}} {{{label}}} {{{menuList}}}`;
  }
}
