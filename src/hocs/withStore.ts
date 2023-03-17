import {isEqual} from "../utils/helpers";
import store, {StoreEvents} from "../utils/Store";
import Block from "../utils/Block";

interface BlockConstructable { new(props: any): Block; }


export function withStore(mapStateToProps: (state: any) => any) {
  let propsFromState: any;

  return function wrap(Component: BlockConstructable){
    let previousState: any;


    return class WithStore extends Component {

      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.UPDATED, () => {
          const stateProps = mapStateToProps(store.getState());

          if(isEqual(propsFromState, stateProps)) {
            return;
          }

          previousState = {...stateProps};

          this.setProps({ ...stateProps });
        });
      }
    }

  }

}
