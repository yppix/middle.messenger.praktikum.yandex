import Block from '../../../utils/Block';
import {Link} from "../link";
import {renderError} from "../../../utils/renderError";

interface NavProps {
  className: Array<string>;
}

export class Nav extends Block {
  constructor(props: NavProps) {
    super('nav', props);
  }

  init() {
    this.children.link404 = new Link({
      linkText: "404",
      className: ["link-nav"],
      events: {
        click: () => renderError(404)
      }
    });

    this.children.link505 = new Link({
      linkText: "505",
      className: ["link-nav"],
      events: {
        click: () => renderError(505)
      }
    });

    this.children.linkChats = new Link({
      linkText: "Chats",
      className: ["link-nav"],
      events: {
        click: () => console.log('chat')
      }
    });


    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `{{{link404}}} {{{link505}}} {{{linkChats}}}`;
  }
}
