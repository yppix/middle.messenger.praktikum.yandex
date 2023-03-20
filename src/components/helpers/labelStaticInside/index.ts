import Block from '../../../utils/Block';
import {SvgIcon} from "../svgIcon";
import {Span} from "../span";

interface LabelForInputProps {
  typeMenu?: string;
  for: string;
  svgId? : string;
  typeInside: string;
  className: Array<string>;
  classNameInside?: string;
  events?: {
    click: () => void,
  };
}

export class LabelStaticInside extends Block {
  constructor(props: LabelForInputProps) {
    super('label', props);
  }

  init() {
    if(this.props.typeInside === "svg" ) {
      this.children.insideElement = new SvgIcon({
        className: ["icon", this.props.svgId],
        id: this.props.svgId
      });
    } else if (this.props.typeInside === "span") {
      this.children.insideElement = new Span({
        className: [this.props.classNameInside]
      });
    }

    this.element!.setAttribute("for", this.props.for);

    this.props.className.forEach((element: string) => this.element!.classList.add(element));
  }

  render() {
    return `{{{insideElement}}}`;
  }
}
