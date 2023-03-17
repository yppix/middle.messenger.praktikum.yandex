import Block from "../utils/Block";
import {PropsWithRouter} from "./withRouter";


export function withControllers<C extends Record<string,any>>(Component: typeof Block<any>, controllers: C) {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class WithControllers extends Component {
    constructor(props: Props & PropsWithRouter) {
      Object.entries(controllers).forEach(([name, Controller]) => {
        props[name] = new Controller;
      })
      super("div", props);
    }
  }
}
