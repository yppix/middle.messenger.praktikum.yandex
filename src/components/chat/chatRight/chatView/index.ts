import Block from '../../../../utils/Block';
import {Title} from "../../../helpers/title";
import {ChatViewHeader} from "../chatViewHeader";
import {ChatViewMessages} from "../chatViewMessages";
import {ChatViewSendForm} from "../chatViewSendForm";
import store from "../../../../utils/Store";
import MessagesController from "../../../../controllers/MessagesController";
import {withStore} from "../../../../hocs/withStore";

interface ChatViewProps {
  className: Array<string>;
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
      this.props.className = ["chat-view"]
      return `{{{header}}} {{{messageList}}} {{{send}}}`;
    }
  }

  protected componentDidUpdate(oldProps: ChatViewProps, newProps: ChatViewProps): boolean {

    // @ts-ignore
    let selectedChatIdOld = oldProps.selectedChatId;
    // @ts-ignore
    let selectedChatIdNew = newProps.selectedChatId;

    if(selectedChatIdOld !== selectedChatIdNew && selectedChatIdNew) {

      const chatSelected = store.getState().chats.list.find((data: { id: any; }) => data.id === selectedChatIdNew)

      this.children.header = new ChatViewHeader({
        className: ["chat-view__header"],
        namePerson: chatSelected.title,
        textPerson: chatSelected.title,
        selectedChatId: chatSelected
      });

      this.children.messageList = new ChatMessagesData({
        className: ["chat-view__messages"],
        idChat: selectedChatIdNew,
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
            }
          }
        }
      })

      this.element?.classList.remove("chat-view__nothing");

      this.element?.classList.add("chat-view");

      return true;
    }
    return false;
  }
}

export const ChatMessagesData = withStore((state) => {
  return { ...state.messages };
})(ChatViewMessages);
