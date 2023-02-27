export function removeError(fieldName: string) {
  if ((event!.target! as HTMLInputElement).classList.contains('invalid')) {
    (event!.target! as HTMLInputElement).classList.remove('invalid');

    const labels = document.querySelectorAll(`[for=${fieldName}]`);
    if (labels) {
      for (let label of labels) {
        label.remove();
      }
    }
  }
}
