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
      typeError: this.props.typePage,
      textError: this.props.typePage,
      className: "error"
    });

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{errorMessage}}}`;
  }
}
