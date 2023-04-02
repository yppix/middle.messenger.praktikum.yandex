import Block from '../../../utils/Block';
import {SvgIcon} from "../../helpers/svgIcon";
import {Link} from "../../helpers/link";
import {ModalForm} from "../../helpers/modalForm";
import ChatsController from "../../../controllers/ChatsController";
import AuthController from "../../../controllers/AuthController";
import Router from "../../../utils/Router";
import {Routes} from "../../../static/route/route";

interface MenuListItemProps {
  isOpenModal: boolean;
  forOpenModal?: string;
  svgId: string;
  linkText: string;
  linkClass: string;
  className: Array<string>;
}

export class MenuListItem extends Block {
  constructor(props: MenuListItemProps) {
    super('li', props);
  }

  init() {
    this.children.toggle = new SvgIcon({
      id: this.props.linkText,
      className: ["icon", this.props.linkText]
    })

    function openModal(event: Event | undefined, props: any) {
      if (!event?.target) {
        return;
      }
      // @ts-ignore
      const action = event.target.textContent;

      if (action === "new-chat") {
        props.isOpenModal = true;
        props.forOpenModal = action;
      }
    }

    this.children.link = new Link({
      linkText: this.props.linkText,
      className: [this.props.linkClass],
      events: {
        click: () => openModal(event, this.props),
      }
    })

    if (this.props.linkText === "edit-profile") {
      this.children.link = new Link({
        linkText: this.props.linkText,
        className: [this.props.linkClass],
        events: {
          click: () => Router.go(Routes.Profile)
        }
      })
    } else if (this.props.linkText === "logout") {
        this.children.link = new Link({
          linkText: this.props.linkText,
          className: [this.props.linkClass],
          events: {
            click: () => AuthController.logout()
          }
        })
    }

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{toggle}}} {{{link}}} {{# if isOpenModal}} {{{modal}}} {{/if}}`;
  }

  // @ts-ignore
  protected componentDidUpdate(oldProps: MenuListItemProps, newProps: MenuListItemProps): boolean {
    if (newProps.isOpenModal) {
      this.children.modal = new ModalForm({
          className: ["modal-form"],
          methodForm: "post",
          actionForm: "#",
          id: `${newProps.forOpenModal}-form`,
          action: newProps.forOpenModal,
          titleText: "Enter chat name",
          events: {
            submit: (event: SubmitEvent) => {
              event!.preventDefault();
              // @ts-ignore
              let title = document.getElementById(`${newProps.forOpenModal}-input`).value
              const form = document.getElementById(`${newProps.forOpenModal}-form`);
              if(title) {
                ChatsController.create(title);
                newProps.isOpenModal = false;
                newProps.forOpenModal = '';
                form!.remove();
              }
            }
          }
        }
      )
      return true;
    }
  }
}
