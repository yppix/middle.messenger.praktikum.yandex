import Block from "../utils/Block";
import Router from "../utils/Router";

interface BlockConstructable { new(props: any): Block; }
interface PropsWithRouter {
  router: typeof Router;
}

export function withControllers<C extends Record<string,any>>(Component: BlockConstructable, controllers: C) {
  type Props = typeof Component extends BlockConstructable ? Record<string, any> : any;

  return class WithControllers extends Component {
    constructor(props: Props & PropsWithRouter) {
      Object.entries(controllers).forEach(([name, Controller]) => {
        props[name] = new Controller;
      })
      super(props);
    }
  }
}
