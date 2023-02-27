import Block from '../../../utils/Block';
import {SvgIcon} from "../../helpers/svgIcon";
import {Span} from "../../helpers/span";

interface MenuBlockProps {
  typeMenu: string;
  className: Array<string>;
}

export class MenuBlock extends Block {
  constructor(props: MenuBlockProps) {
    super('div', props);
  }

  init() {
    if(this.props.typeMenu === "delete-chat" || this.props.typeMenu==="add-members") {
      this.children.svg = new SvgIcon({
        id: `${this.props.typeMenu}`,
        className: ["icon", this.props.typeMenu]
      });
      this.children.span = new Span({
        className: [`${this.props.typeMenu}__item`],
        text: `${this.props.typeMenu}`,
        events: {
          click: () => {
            this.openModal()
          },
        }
      });
    }

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{svg}}} {{{span}}}`;
  }

  private openModal() {
    (document.querySelector(`.${this.props.typeMenu}__modal`)! as HTMLDivElement).style.visibility = "visible";
    (document.querySelector(`.${this.props.typeMenu}__modal`)! as HTMLDivElement).style.left = "0";
  }
}
