import Block from '../../../../utils/Block';
import {ChatHelper} from "../../chatHelper";
import {LabelP} from "../../../helpers/labelP";
import {Menu} from "../../../menus/menu";
import {SvgIcon} from "../../../helpers/svgIcon";

interface ChatListInfoProps {
  className: Array<string>;
  isReaden?: boolean;
  notification?:boolean;
}

export class ChatListInfo extends Block {
  constructor(props: ChatListInfoProps) {
    super('div', props);
  }

  init() {
    if(this.props.notification) {
      this.children.notification = new ChatHelper({
        className: ["chat-notification"],
        text: "1"
      });
    }

    this.children.menu = new Menu({
      className: ["delete-chat"],
      typeMenu: "delete-chat",
      typeInside: "svg",
      svgId: "triple-dots-vertical",
      blockInside: "block"
    });

    let svgId = "check";

    if(this.props.isReaden) {
      svgId = "double-check";
    }

    this.children.icon  = new SvgIcon({
      className: ["icon", svgId],
      id: svgId
    });

    this.children.time  = new LabelP({
      className: ["chat-info__time"],
      message: "18.99"
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `<div class="chat-info__top"> {{#if ${this.props.notification} }} {{{notification}}} {{/if}} {{{menu}}} </div> <div class="chat-info__bottom"> {{{icon}}} {{{time}}}</div>`;
  }
}
