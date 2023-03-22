import Block from '../../utils/Block';
import {ErrorMessage} from "../../components/errorMessage";

interface ErrorProps {
  className: string;
  typePage: string;
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super('main', props);
  }

  init() {

    this.children.errorMessage =new ErrorMessage({
      typeError:  "404",
      textError: "Nothing to see here",
      className: "error"
    });

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{errorMessage}}}`;
  }
}
