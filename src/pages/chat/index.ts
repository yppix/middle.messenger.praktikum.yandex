import Block from '../../utils/Block';
import {ChatList} from "../../components/chat/chatLeft/chatList";
import {ChatView} from "../../components/chat/chatRight/chatView";
import {withStore} from "../../hocs/withStore";
import {Chat as ChatTypeProps} from "../../apiTypes/chatTypes";
import {State} from "../../utils/Store";
import ChatsController from "../../controllers/ChatsController";

interface ChatProps {
  className: string;
  messageView?: boolean;
}

export interface PropsWithChat extends ChatTypeProps {
  isLoading?: boolean
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super('main', props);
  }

  init() {
    ChatsController.fetchChats()

    this.children.chatList = new ChatListData({
      className: ["chat-list"]
    })

    this.children.chatPage = new ChatViewData({
      className: ["chat-view__nothing"],
    });

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `<div class="chat">{{{chatList}}} {{{chatPage}}}</div>`;
  }
}

export const ChatListData = withStore((state) => {
  return {...state.chats} as PropsWithChat;
})(ChatList);

export const ChatViewData = withStore((state: State) => {
  const chats = {...state.chats};
  const selectedChatId = state.selectedChatId;

  return {chats: chats, selectedChatId: selectedChatId};
})(ChatView);

