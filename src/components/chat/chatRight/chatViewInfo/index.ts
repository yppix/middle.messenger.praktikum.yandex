import Block from '../../../../utils/Block';
import {LabelStaticInside} from "../../../helpers/labelStaticInside";
import ChatsController from "../../../../controllers/ChatsController";
import {ModalInfoChatForm} from "../../../helpers/modalInfoChat";

interface ChatViewInfoProps {
  className: Array<string>;
  isOpenModal?: boolean;
  forOpenModal?: string;
  selectedChatId?: number;
}

export class ChatViewInfo extends Block {
  constructor(props: ChatViewInfoProps) {
    super('div', props);
  }

  init() {
    this.props.isOpenModal = false;

    this.children.addLabel = new LabelStaticInside({
      typeInside: "svg",
      className: ["info-menu__btn"],
      svgId: "add-member",
      for: "add-member",
      events: {
        click: () => openModal(event, this.props),
      }
    })

    this.children.removeLabel = new LabelStaticInside({
      typeInside: "svg",
      className: ["info-menu__btn"],
      svgId: "remove-person",
      for: "remove-person",
      events: {
        click: () => openModal(event, this.props),
      }
    })

    function openModal(event: Event | undefined, props: any) {
      if (!event?.target) {
        return;
      }
      // @ts-ignore
      const action = event.currentTarget.htmlFor;

      if (action === "add-member") {
        props.isOpenModal = true;
        props.forOpenModal = action;
      } else if (action === "remove-person") {
        props.isOpenModal = true;
        props.forOpenModal = action;
      }
    }

    this.props.className.forEach((element: string) => this.element!.classList.add(element))
  }

  render() {
    return `<div class="user-move"> {{{addLabel}}} {{{removeLabel}}}</div> {{# if isOpenModal}} {{{modal}}} {{/if}}`;
  }

  // @ts-ignore
  protected componentDidUpdate(oldProps: ChatViewInfoProps, newProps: ChatViewInfoProps): boolean {
    if (newProps.isOpenModal && newProps.forOpenModal === "add-member") {
      this.children.modal = new ModalInfoChatForm({
          className: ["modal-form-right"],
          methodForm: "post",
          actionForm: "#",
          id: `${newProps.forOpenModal}-form`,
          action: newProps.forOpenModal,
          titleText: "Add user to chat by id",
          events: {
            submit: (event: SubmitEvent) => {
              event!.preventDefault();

              let chatId = this.props.selectedChatId.id;
              let userId = Number((document.getElementById(`${newProps.forOpenModal}__userId-input`) as HTMLInputElement)!.value.trim());

              const form = document.getElementById(`${newProps.forOpenModal}-form`);
              if(userId && chatId) {
                ChatsController.addUserToChat(chatId, userId);
                newProps.isOpenModal = false;
                newProps.forOpenModal = '';
                form!.remove();
              }
            }
          }
        })
    } else if (newProps.isOpenModal && newProps.forOpenModal === "remove-person") {
      this.children.modal = new ModalInfoChatForm({
        className: ["modal-form-right"],
        methodForm: "post",
        actionForm: "#",
        id: `${newProps.forOpenModal}-form`,
        action: newProps.forOpenModal,
        titleText: "Remove user from chat by id",
        events: {
          submit: (event: SubmitEvent) => {
            event!.preventDefault();

            let chatId = this.props.selectedChatId.id;
            let userId = Number((document.getElementById(`${newProps.forOpenModal}__userId-input`) as HTMLInputElement)!.value.trim());

            const form = document.getElementById(`${newProps.forOpenModal}-form`);
            if(userId && chatId) {
              ChatsController.removeUserFromChat(chatId, userId);
              newProps.isOpenModal = false;
              newProps.forOpenModal = '';
              form!.remove();
            }
          }
        }
      })
    }
    return true;
  }
}
