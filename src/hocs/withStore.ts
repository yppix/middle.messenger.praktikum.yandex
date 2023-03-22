import {isEqual} from "../utils/helpers";
import store, {StoreEvents} from "../utils/Store";
import Block from "../utils/Block";

interface BlockConstructable { new(props: any): Block; }


export function withStore(mapStateToProps: (state: any) => any) {
  let previousState: any;

  return function wrap(Component: BlockConstructable){

    return class WithStore extends Component {

      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.UPDATED, () => {
          const stateProps = mapStateToProps(store.getState());

          if(isEqual(previousState, stateProps)) {
            return;
          }

          previousState = {...stateProps};

          this.setProps({ ...stateProps });
        });
      }
    }

  }

}
