import Block from '../../../../utils/Block';
import {Title} from "../../../helpers/title";
import {ChatViewHeader} from "../chatViewHeader";
import {ChatViewMessages} from "../chatViewMessages";
import {ChatViewSendForm} from "../chatViewSendForm";
import MessagesController from "../../../../controllers/MessagesController";
import {withStore} from "../../../../hocs/withStore";
import {isEqual} from "../../../../utils/helpers";
import ChatsController from "../../../../controllers/ChatsController";

interface ChatViewProps {
  className: Array<string>;
  selectedChatId: number;
}

export class ChatView extends Block {
  constructor(props: ChatViewProps) {
    super('div', props);
  }

  init() {
    this.children.title = new Title({
      titleText: "Choose your chat",
      className: ["chat-view__title"]
    });

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    if(!this.props.selectedChatId) {
      return `{{{title}}}`;
    } else {
      return `{{{header}}} {{{messageList}}} {{{send}}}`;
    }
  }

  protected componentDidUpdate(oldProps: ChatViewProps, newProps: ChatViewProps): boolean {
    let selectedChatIdNew = newProps.selectedChatId;

    if(!isEqual(oldProps, newProps) && selectedChatIdNew) {
      // @ts-ignore
      const chatSelected = newProps.chats.list.find((data: { id: number; }) => data.id === selectedChatIdNew)

      this.children.header = new ChatViewHeader({
        className: ["chat-view__header"],
        namePerson: chatSelected.title,
        textPerson: chatSelected.title,
        selectedChatId: chatSelected
      });

      this.children.messageList = new ChatMessagesData({
        className: ["chat-view__messages"],
        idChat: selectedChatIdNew,
        idBLock: "chat-view-messenger"
      });

      this.children.send = new ChatViewSendForm ({
        className: ["chat-message__input"],
        methodForm: "post",
        actionForm: "#",
        id: "send-message",
        idChat: selectedChatIdNew,
        events: {
          submit: (event: SubmitEvent) => {
            event!.preventDefault();
            const message = document.getElementById("send-message-input") as HTMLInputElement;
            if (message!.value) {
              MessagesController.sendMessage(selectedChatIdNew, message!.value)
              message!.value = "";
              ChatsController.fetchChats();
            }
          }
        }
      })

      const chatViews = document.querySelectorAll('.chat-view__nothing');

      if(chatViews) {
        for (const div of chatViews) {
          div.classList.remove("chat-view__nothing");
          div.classList.add("chat-view");
        }
      }

      return true;
    }
    return true;
  }
}

export const ChatMessagesData = withStore((state) => {
  const userId = state.user?.data?.id;
  const messages = {...state.messages};
  return {userId: userId, messages: messages};
})(ChatViewMessages);
