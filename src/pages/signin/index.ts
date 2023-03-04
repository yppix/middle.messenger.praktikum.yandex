import Block from '../../utils/Block';
import {Form} from "../../components/helpers/form";
import {Nav} from "../../components/helpers/navigation";
import {getFormField} from "../../utils/getFormField";

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
      id: "signin",
      events: {
        submit: (event: SubmitEvent) => {
          event!.preventDefault();
          if (getFormField('signin')) {
            console.log(getFormField('signin'))
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
