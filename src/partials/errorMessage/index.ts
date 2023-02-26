import {renderDOM} from "../../utils/renderDOM";
import Block from "../../utils/Block";
import { Subtitle } from "../subtitle";
import {Title} from "../title";
import {Link} from "../link";

const ERRORS: Record<string, string> = {
  "404": "Nothing to see here",
  "505":"Our cats broke something. We are fixing..."
};

interface ErrorMessageProps {
  typeError: string;
  textError: string;
  className:string;
  events: {
    click: () => void,
  };
}

export class ErrorMessage extends Block {
  constructor(props: ErrorMessageProps) {
    super('div', props);
  }

  init() {
    this.children.title = new Title({
      titleText: this.props.typeError,
      className: ["title-error"]
    });

    if (this.props.typeError === "505") {
      this.props.textError = "Broken" ;
    } else if (this.props.typeError === "404") {
      this.props.textError = "Cat" ;
    }

    this.children.subtitle = new Subtitle({
      titleText: ERRORS[this.props.textError],
      className: ["subtitle-error"]
    });

    this.children.link = new Link({
      linkText: "Main page",
      className: ["link-nav"],
      events: {
        click: () => renderDOM('signin')
      }
    });

    this.element?.classList.add(this.props.className);

  }

  render() {
    return `{{{title}}} {{{subtitle}}} {{{link}}}`;
  }
}
