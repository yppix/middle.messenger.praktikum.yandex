import {CHATS} from "../static/data/data";

export function choseChat(id: number): void {
  const chatChosen = CHATS.find(element => element.id === id);
  chatChosen!.isChosen = true;
  CHATS.forEach((item) => {
    if (item.id !== id) {
      item.isChosen = false
    }
  });
}

export function isChosen():boolean {
  const chatChosen = CHATS.findIndex(element => element.isChosen);
  if (chatChosen === -1) {
    return false;
  }

  return true;
}

export function getChosenChat(): any {
  return CHATS.find(element => element.isChosen) ?? null;
}

export function colorChosenChat(): void {
  const divMessage = document.querySelector("[style='background-color: var(--orange)']");
  if(divMessage && divMessage !== event!.currentTarget!) {
    divMessage!.removeAttribute("style");
  }

  (event!.currentTarget! as HTMLDivElement).setAttribute("style", "background-color: var(--orange)");
}
