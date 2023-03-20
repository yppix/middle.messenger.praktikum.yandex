import Block from '../../../utils/Block';
import {Input} from "../../helpers/field";
import {LabelStaticInside} from "../../helpers/labelStaticInside";

interface ProfileAvatarFormProps {
  actionForm: string;
  methodForm: string;
  className?: Array<string>;
  id: string;
  events?: {
    submit: (event: SubmitEvent) => void,
  };
}

export class ProfileAvatarForm extends Block {
  constructor(props: ProfileAvatarFormProps) {
    super('form', props);
  }

  init() {

    this.children.avatar = new Input ({
      id: "profile__load-avatar-input",
      nameInput: "avatar",
      className: ["load-avatar-input"],
      typeInput: "file",
    })

    this.children.labelFile = new LabelStaticInside ({
      for: "profile__load-avatar-input",
      svgId : "upload-big",
      typeInside: "svg",
      className: ["load-avatar"]
    })

    if (this.props.className) {
      this.props.className.forEach((element: string) => this.element!.classList.add(element));
    }
    this.element!.setAttribute("method", this.props.methodForm);
    this.element!.setAttribute("action", this.props.actionForm);
    this.element!.setAttribute("enctype", "multipart/form-data");
    this.element!.setAttribute("id", this.props.id);

  }

  render() {
    return `{{{avatar}}} {{{labelFile}}}`;
  }

}
