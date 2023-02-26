import Block from '../../utils/Block';
import {ChatSearchForm} from "../chatSearch";
import {Menu} from "../menu";

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
      className: ["hamburger-menu"]
    })

    this.children.search = new ChatSearchForm({
      actionForm: "get",
      methodForm: "#",
      className: ["chat-search"]
    })
    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{menu}}} {{{search}}}`;
  }
}
