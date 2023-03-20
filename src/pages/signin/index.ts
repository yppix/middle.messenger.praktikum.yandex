import Block from '../../utils/Block';
import {Form} from "../../components/helpers/form";
import {Nav} from "../../components/helpers/navigation";
import {getFormField} from "../../utils/getFormField";
import AuthController from "../../controllers/AuthController";
import {SigninData} from "../../apiTypes/authTypes";
import {Label} from "../../components/helpers/label";
import withUser from "../../hocs/withUser";

interface SigninProps {
  className?: string;
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
      redirectLink: "/register",
      actionForm: "#",
      methodForm: "post",
      className: ["form-signin"],
      id: "signin",
      events: {
        submit: (event: SubmitEvent) => {
          event!.preventDefault();
          if (getFormField('signin')) {
            AuthController.signin(getFormField('signin') as SigninData)
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
    return `{{#if error}} {{{errorLabel}}} {{/if}} {{{form}}} `;
  }

  // @ts-ignore
  protected componentDidUpdate(oldProps: SigninProps, newProps: SigninProps): boolean {
    if(this.props.error) {
      this.children.errorLabel = new Label({
        message: this.props.error['reason'],
        className: ['error-message-password']
      })
      return true;
    }
  }
}

export const SigninPage = withUser(Signin);
