import Block from '../../utils/Block';
import {Form} from "../../partials/form";
import {Nav} from "../../partials/navigation";

interface SignupProps {
  className: string;
}

export class Signup extends Block {
  constructor(props: SignupProps) {
    super('main', props);
  }

  init() {

    this.children.form =new Form({
      titleForm: "Sign up",
      formPurpose: "Have an account?",
      typeForm: "signup",
      redirectLink: "signin",
      actionForm: "#",
      methodForm: "post",
      className: ["form-signup"],
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
