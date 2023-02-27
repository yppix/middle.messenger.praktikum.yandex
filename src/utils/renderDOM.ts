import {Signin} from "../pages/signin";
import {Signup} from "../pages/signup";
import {Chat} from "../pages/chat";
import {Profile} from "../pages/profile";
import {ProfileEdit} from "../pages/profile-edit";
import {ChangePassword} from "../pages/change-password";

const ROUTES = {
  signin: Signin,
  signup: Signup,
  chat: Chat,
  profile: Profile,
  editProfile: ProfileEdit,
  changePassword: ChangePassword
}

export function renderDOM (route: keyof typeof ROUTES) {
  const root = document.querySelector('#app');
  root!.innerHTML = '';

  const PageComponent = ROUTES[route];

  // @ts-ignore
  const page = new PageComponent({ className: "container"});

  // @ts-ignore
  root!.appendChild(page!.element);
  page.dispatchComponentDidMount();

}
