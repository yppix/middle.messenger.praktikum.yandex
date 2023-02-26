import Block from '../../utils/Block';
import {Link} from "../link";
import {renderDOM} from "../../utils/renderDOM";

interface TitleFormFooterProps {
  typeRedirect: string;
  titleText: string;
  className: Array<string>;
  events: {
    click: () => void,
  };
}

export class TitleFormFooter extends Block {
  constructor(props: TitleFormFooterProps) {
    super('p', props);
  }

  init() {
    this.children.link = new Link({
      linkText: this.props.typeRedirect === "signup" ? "Sign up" : "Sign in",
      className: ["form__link-footer"],
      events: {
        click: () => renderDOM(this.props.typeRedirect)
      }
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{titleText}} {{{link}}}`;
  }
}
