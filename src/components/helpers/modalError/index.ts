import Block from '../../../utils/Block';
import {Button} from "../button";
import {LabelP} from "../labelP";

interface ModalErrorProps {
  className?: Array<string>;
  text?: string;

}

export class ModalError extends Block {
  constructor(props: ModalErrorProps) {
    super('div', props);
  }

  init() {
    this.children.label = new LabelP({
      className: ["delete-chat__text"],
      message: "Are you sure you want to delete chat with Name?"
    })

    this.children.buttonFirst = new Button({
      className: ["first-button"],
      label: "Yes",
      events: {
        click: () => this.hideModal()
      }
    })

    this.children.buttonSecond = new Button({
      className: ["second-button"],
      label: "No",
      events: {
        click: () => {
          this.hideModal()
        }
      }
    })

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{label}}} <div class="button-fieldset">{{{buttonFirst}}}{{{buttonSecond}}}</div>`;
  }

  private hideModal() {
    (document.querySelector(`.delete-chat__modal`)! as HTMLDivElement).style.visibility = "hidden";
    (document.querySelector(`.delete-chat__modal`)! as HTMLDivElement).style.left = "-100%";

  }
}
