import Block from '../../utils/Block';
import {Form} from "../../components/helpers/form";
import {Nav} from "../../components/helpers/navigation";
import {getFormField} from "../../utils/getFormField";
import AuthController from "../../controllers/AuthController";
import {SignupData} from "../../apiTypes/authTypes";
import withUser from "../../hocs/withUser";
import {Label} from "../../components/helpers/label";
import {Routes} from "../../static/route/route";
import Router from "../../utils/Router";

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
      redirectLink: "/",
      actionForm: "#",
      methodForm: "post",
      id: "signup",
      className: ["form-signup"],
      events: {
        submit: (event: SubmitEvent) => {
          event!.preventDefault();
          if (getFormField('signup')) {
            AuthController.signup(getFormField('signup') as SignupData);
            Router.go(Routes.Index)
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
    return `{{#if error}} {{{errorLabel}}} {{/if}} {{{form}}}`;
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
export const SignupPage = withUser(Signup);
