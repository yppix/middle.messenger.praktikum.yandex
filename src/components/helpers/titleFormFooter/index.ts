import Block from '../../../utils/Block';
import {Link} from "../link";
import {Routes} from "../../../static/route/route";

interface TitleFormFooterProps {
  typeRedirect: string;
  titleText: string;
  className: Array<string>;
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
        click: () => this.props.router.go(this.props.typeRedirect === "signup" ? Routes.Register : Routes.Index)
      }
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{titleText}} {{{link}}}`;
  }
}
