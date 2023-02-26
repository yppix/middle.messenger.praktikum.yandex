import Block from '../../utils/Block';
import {Form} from "../../partials/form";
import {Nav} from "../../partials/navigation";

interface SigninProps {
  className: string;
}

export class Signin extends Block {
  constructor(props: SigninProps) {
    super('main', props);
  }

  init() {
    this.children.form =new Form({
      titleForm: "Sign in",
      formPurpose: "Haven`t registered yet?",
      typeForm: "signin",
      redirectLink: "signup",
      actionForm: "#",
      methodForm: "post",
      className: ["form-signin"],
      events: {
        click: () => console.log('Clicked')
      }
    });

    this.children.nav = new Nav({
      className: ["nav"]
    });

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{form}}} {{{nav}}}`;
  }
}
