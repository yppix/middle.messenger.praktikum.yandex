import Block from '../../utils/Block';
import {ProfileView} from "../../components/profile/profileView";
import {withStore} from "../../hocs/withStore";

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

  protected componentDidUpdate(oldProps: ProfileProps, newProps: ProfileProps):any {
    console.log(oldProps)
    console.log(newProps)
  }

}

export const ProfilePage = withStore((state) => {
  const userData =  state.user.data || {};

  userData.isLoading = state.user.isLoading;

  return userData;
})(Profile);
