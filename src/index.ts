import {SigninPage} from "./pages/signin";
import {SignupPage} from "./pages/signup";
import {Profile} from "./pages/profile";
import Router from './utils/Router';
import AuthController from './controllers/AuthController';
import {Error} from "./pages/error";
import {ProfileEdit} from "./pages/profile-edit";
import {ChangePassword} from "./pages/change-password";
import {Chat} from "./pages/chat";
import {Routes} from "./static/route/route";
import ChatsController from "./controllers/ChatsController";

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, SigninPage)
    .use(Routes.Register, SignupPage)
    .use(Routes.Profile, Profile)
    .use(Routes.ProfileEdit, ProfileEdit)
    .use(Routes.Password, ChangePassword)
    .use(Routes.Chats, Chat)
    .use(Routes.NotFound, Error)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }
  console.log('isProtectedRoute')

  console.log(isProtectedRoute)

  try {
    await AuthController.fetchUser();

    Router.start();

    await ChatsController.fetchChats();

    if (!isProtectedRoute) {
      Router.go(Routes.Chats)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
