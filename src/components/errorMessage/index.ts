import Block from "../../utils/Block";
import { Subtitle } from "../helpers/subtitle";
import {Title} from "../helpers/title";
import {Link} from "../helpers/link";
import router from "../../utils/Router";
import {Routes} from "../../static/route/route";

interface ErrorMessageProps {
  typeError: string;
  textError: string;
  className:string;
  events?: {
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

    this.children.subtitle = new Subtitle({
      titleText: this.props.textError,
      className: ["subtitle-error"]
    });

    this.children.link = new Link({
      linkText: "Main page",
      className: ["link-nav"],
      events: {
        click: () => router.go(Routes.Index)
      }
    });

    this.element?.classList.add(this.props.className);

  }

  render() {
    return `{{{title}}} {{{subtitle}}} {{{link}}}`;
  }
}
