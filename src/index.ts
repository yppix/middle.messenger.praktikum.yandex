 import {Signin} from "./pages/signin";
 import {Signup} from "./pages/signup";
 import {Profile} from "./pages/profile";

 import Router from './utils/Router';
 import AuthController from './controllers/AuthController';
 enum Routes {
   Index = '/',
   Register = '/register',
   Profile = '/profile'
 }

 window.addEventListener('DOMContentLoaded', async () => {
   Router
     .use(Routes.Index, Signin)
     .use(Routes.Register, Signup)
     .use(Routes.Profile, Profile)

   let isProtectedRoute = true;

   switch (window.location.pathname) {
     case Routes.Index:
     case Routes.Register:
       isProtectedRoute = false;
       break;
   }

   try {
     await AuthController.fetchUser();

     Router.start();

     if (!isProtectedRoute) {
       Router.go(Routes.Profile)
     }
   } catch (e) {
     Router.start();

     if (isProtectedRoute) {
       Router.go(Routes.Index);
     }
   }

 });
