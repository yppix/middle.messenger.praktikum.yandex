import Block from '../utils/Block';
import Router from '../utils/Router';

interface BlockConstructable { new(props: any): Block; }

export function withRouter(Component: BlockConstructable) {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class WithRouter extends Component {
    constructor(props: Props) {
      super({ ...props, router: Router });
    }
  }
}
