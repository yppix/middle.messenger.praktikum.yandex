import {Error} from "../pages/error";

const ROUTES = {
  505: Error,
  404: Error
}

export function renderError (route: keyof typeof ROUTES) {
  const root = document.querySelector('#app');
  root!.innerHTML = '';

  const ErrorComponent = ROUTES[route];

  // @ts-ignore
  const page = new ErrorComponent({ className: "container", typePage: route});

  // @ts-ignore
  root!.appendChild(page!.element);
  page.dispatchComponentDidMount();

}
