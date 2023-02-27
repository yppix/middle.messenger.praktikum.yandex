import Block from '../../utils/Block';
import {ProfileView} from "../../components/profile/profileView";
interface ProfileProps {
  className: string;
}

export class Profile extends Block {
  constructor(props: ProfileProps) {
    super('main', props);
  }

  init() {
    this.children.view = new ProfileView({
      className: ["profile"]
    })

    this.element?.classList.add(this.props.className);
  }

  render() {
    return `{{{view}}}`;
  }
}
