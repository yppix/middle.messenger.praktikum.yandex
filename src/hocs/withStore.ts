import {isEqual} from "../utils/helpers";
import store, {StoreEvents} from "../utils/Store";
import Block from "../utils/Block";

interface BlockConstructable { new(props: any): Block; }


export function withStore(mapStateToProps: (state: any) => any) {
  let previousState: any;

  return function wrap(Component: BlockConstructable){

    return class WithStore extends Component {
      private handler:()=>void;
      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        this.handler = () => {
          const stateProps = mapStateToProps(store.getState());

          if(isEqual(previousState, stateProps)) {
            return;
          }

          previousState = {...stateProps};

          this.setProps({ ...stateProps });
        };

        store.on(StoreEvents.UPDATED,this.handler);
      }

      componentWillUnmount() {
        store.off(StoreEvents.UPDATED,this.handler);
      }
    }

  }

}
