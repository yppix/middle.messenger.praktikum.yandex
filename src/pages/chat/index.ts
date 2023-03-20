import Block from '../../utils/Block';
import {ChatList} from "../../components/chat/chatLeft/chatList";
import {ChatView} from "../../components/chat/chatRight/chatView";
import {withStore} from "../../hocs/withStore";
import {Chat as ChatTypeProps} from "../../apiTypes/chatTypes";
import {State} from "../../utils/Store";

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
  const chatData = { ...state.chats } as PropsWithChat;
  chatData.isLoading = state.chats?.isLoading ? state.chats?.isLoading : true;
  return chatData;
})(ChatList);

export const ChatViewData = withStore((state: State) => ({selectedChatId: state.selectedChatId}))(ChatView);

