
export function getFormField(typeForm: string): object|boolean {
  const form = document.getElementById(typeForm);
  const formElements = Array.from((form as HTMLFormElement).elements);

  let hasErrors: boolean = false;

  formElements.forEach((item) => {
    if (item.classList.contains("invalid") && !(item as HTMLInputElement).value) {
      _removeError(item)
    }

    if (item.classList.contains("invalid")) {
      hasErrors = true;
    }


    _checkField(item);
  })

  // @ts-ignore
  let formFields = formElements.reduce((acc: Record<string, string>, item: string) => {
    // @ts-ignore
    if (!(item.classList.contains("button")) && item.value){
      // @ts-ignore
      return {...acc, [item.name]: item.value}
    } else {
      return {...acc}
    }
  }, {});

  if (formFields && !hasErrors && !(Object.entries(formFields).length === 0)) {
    return formFields;
  }

  return false;
}

function _checkField(field: any)
{
  if (!(field.classList.contains("button")) && !field.value){
    (field as HTMLInputElement).classList.add('invalid');

    const label = document.createElement("label");

    let fieldName = field.name.replace('_', ' ')


    label.setAttribute("for", field.name);
    label.setAttribute("class", "error-message");

    label.innerHTML = `${fieldName} can not be empty.`;

    (field as HTMLInputElement).after(label);
  }
}

function _removeError(field: any)
{
  if ((field as HTMLInputElement).classList.contains('invalid')) {
    (field as HTMLInputElement).classList.remove('invalid');

    const labels = document.querySelectorAll(`[for=${field.name}]`);
    if (labels) {
      for (let label of labels) {
        label.remove();
      }
    }
  }
}
