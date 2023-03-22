export function closeModal() {
  const modalsRight = document.getElementsByClassName('modal-form-right');
  for (const modal of modalsRight) {
    (modal as HTMLDivElement).style.display = "none";
    (modal as HTMLDivElement).style.visibility  = "hidden"
  }
}
