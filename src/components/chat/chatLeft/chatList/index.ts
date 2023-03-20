import Block from '../../../../utils/Block';
import {ChatListHeader} from "../chatListHeader";
import {ChatListPerson} from "../chatListPerson";
import {ChatHelper} from "../../chatHelper";
import ChatsController from "../../../../controllers/ChatsController";


interface ChatListProps {
  className: Array<string>;
  events?: {
    click: () => void;
  }
}

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super('div', props);
  }

  init() {
    this.children.header = new ChatListHeader({
      className: ["chat-list__header"]
    });

    if (!this.props.isLoading) {
      this.children.chats = this.createChats();
    }

    this.children.helper = new ChatHelper({
      text: "No chats here",
      className: ["helper-chat-text"]
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{header}}} {{#if isLoading}} {{{helper}}} {{/if}} {{#each chats }} {{{this}}} {{/each}}`;
  }

  // @ts-ignore
  protected componentDidUpdate(oldProps: ChatListProps, newProps: ChatListProps): boolean {

    console.log('chats')
    console.log(oldProps)
    console.log(newProps)
    console.log(this.children.chats)

    // @ts-ignore
      if (newProps.list) {
      // @ts-ignore
      newProps.isLoading = false;
      this.children.chats = this.createChats();
      return true;
    }
    return true;
  }

  private createChats() {
    return this.props.list.map((data: { title: any; last_message: any; unread_count: number; id: number; }) => {
        return new ChatListPerson({
          namePerson: data.title,
          textPerson: data.last_message?.content ? data.last_message?.content : 'no new message',
          notification: data.unread_count,
          time: '00:00',
          id: data.id,
          isReaden: data.unread_count === 0,
          className: ["chat-list__person"],
          events: {
            click: () => {
              ChatsController.selectChat(data.id)
            }
          }
        });
      })
  }
}
