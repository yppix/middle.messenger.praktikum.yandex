import Block from '../../../../utils/Block';
import {ChatSearchForm} from "../chatSearch";
import {Menu} from "../../../menus/menu";

interface ChatListHeaderProps {
  className: Array<string>;
}

export class ChatListHeader extends Block {
  constructor(props: ChatListHeaderProps) {
    super('div', props);
  }

  init() {
    this.children.menu = new Menu({
      typeMenu: "hamburger-menu",
      className: ["hamburger-menu"],
      typeInside: "span",
      blockInside: "list"
    })

    this.children.search = new ChatSearchForm({
      actionForm: "get",
      methodForm: "#",
      className: ["chat-search"],
      id: "search",
      events: {
        submit: (event: SubmitEvent) => {
          event!.preventDefault();
        }
      }
    })
    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{menu}}} {{{search}}}`;
  }
}
