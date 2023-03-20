import Block from '../../../utils/Block';
import search from '../../../static/icons/search.svg'
import deleteChat from '../../../static/icons/delete-chat.svg'
import check from '../../../static/icons/check.svg'
import close from '../../../static/icons/close.svg'
import doubleCheck from '../../../static/icons/double-check.svg'
import editProfile from '../../../static/icons/edit-profile.svg'
import addMember from '../../../static/icons/add-member.svg'
import info from '../../../static/icons/info.svg'
import logout from '../../../static/icons/logout.svg'
import newChat from '../../../static/icons/new-chat.svg'
import newGroupChat from '../../../static/icons/new-group-chat.svg'
import removePerson from '../../../static/icons/remove-person.svg'
import send from '../../../static/icons/send.svg'
import settings from '../../../static/icons/settings.svg'
import tripleDotsH from '../../../static/icons/triple-dots-horizontal.svg'
import tripleDotsV from '../../../static/icons/triple-dots-vertical.svg'
import upload from '../../../static/icons/upload.svg'
import uploadBig from '../../../static/icons/upload-big.svg'

interface SvgIconProps {
  className?: Array <string>;
  id: string;
  events?: {
    click: (event: MouseEvent) => void,
  };
}

export class SvgIcon extends Block {
  constructor(props: SvgIconProps) {
    super('svg', props);
  }

  init() {
    if(this.props.className) {
      this.props.className.forEach((element: string) => this.element!.classList.add(element))
    }
    this.element!.setAttribute("id", this.props.id);
  }

  render() {
    if (this.props.id === "search") {
       return `<svg style="height:19px; width:19px;  position: absolute; align-self: center; color: var(--white)"><use xlink:href="${search}"/></svg>`;
     } else if (this.props.id === "delete-chat") {
       return `<svg style="height:23px; width:23px; align-self: center; color: var(--error)"><use xlink:href="${deleteChat}"/></svg>`;
     } else if (this.props.id === "check") {
       return `<svg style="height:100%; width:100%; align-self: center; color: var(--nude)"><use xlink:href="${check}"/></svg>`;
     } else if (this.props.id === "close") {
       return `<svg style="height:23px; width:23px; color: var(--dark-grey)"><use xlink:href="${close}"/></svg>`;
     } else if (this.props.id === "edit-profile") {
       return `<svg style="height:22px; width:20px; align-self: center; color: var(--orange)"><use xlink:href="${editProfile}"/></svg>`;
     } else if (this.props.id === "add-member") {
      return `<svg style="height:22px; width:35px; align-self: center; color: var(--orange)"><use xlink:href="${addMember}"/></svg>`;
     } else if (this.props.id === "info") {
       return `<svg style="height:22px; width:30px; align-self: center; color: var(--orange)"><use xlink:href="${info}"/></svg>`;
     } else if (this.props.id === "logout") {
       return `<svg style="height:22px; width:20px; align-self: center; color: var(--orange)"><use xlink:href="${logout}"/></svg>`;
     } else if (this.props.id === "new-chat") {
       return `<svg style="height:22px; width:20px; align-self: center; color: var(--orange)"><use xlink:href="${newChat}"/></svg>`;
     } else if (this.props.id === "new-group-chat") {
       return `<svg style="height:22px; width:20px; align-self: center; color: var(--orange)"><use xlink:href="${newGroupChat}"/></svg>`;
     } else if (this.props.id === "remove-person") {
       return `<svg style="height:23px; width:23px; align-self: center; color: var(--error)"><use xlink:href="${removePerson}"/></svg>`;
     } else if (this.props.id === "send") {
       return `<svg style="height:22px; width:30px; align-self: center; color: var(--orange)"><use xlink:href="${send}"/></svg>`
     } else if (this.props.id === "settings") {
       return `<svg style="height:22px; width:22px; align-self: center; color: var(--orange)"><use xlink:href="${settings}"/></svg>`;
     } else if (this.props.id === "triple-dots-horizontal") {
       return `<svg style="height:22px; width:30px; align-self: center; color: var(--orange)"><use xlink:href="${tripleDotsH}"/></svg>`;
     } else if (this.props.id === "triple-dots-vertical") {
       return `<svg style="height:23px; width:16px; align-self: center; color: var(--white)"><use xlink:href="${tripleDotsV}"/></svg>`;
     } else if (this.props.id === "upload") {
       return `<svg style="height:60px; width:45px; align-self: center; margin-top: 15px; color: var(--orange)"><use xlink:href="${upload}"/></svg>`;
     } else if (this.props.id === "upload-big") {
       return `<svg style="height:86px; width:86px; align-self: center; margin-top: 50%; transform: translateY(-50%); color: var(--orange)"><use xlink:href="${uploadBig}"/></svg>`;
     } else if (this.props.id === "double-check") {
       return `<svg style="height:20px; width:23px; align-self: center; color: var(--green)"><use xlink:href="${doubleCheck}"/></svg>`;
     } else {
       return ``;
     }
  }
}
