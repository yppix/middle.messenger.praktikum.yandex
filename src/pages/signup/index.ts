import Block from '../../utils/Block';
import {Form} from "../../components/helpers/form";
import {Nav} from "../../components/helpers/navigation";
import {getFormField} from "../../utils/getFormField";

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
      id: "signup",
      className: ["form-signup"],
      events: {
        submit: () => {
          event!.preventDefault();
          if (getFormField('signup')) {
            console.log(getFormField('signup'))
          }
        }
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
