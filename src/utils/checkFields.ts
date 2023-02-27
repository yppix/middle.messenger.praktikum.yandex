const ERRORS: Record<string, string> = {
  "empty": " can not be empty.",
  "min": " must contain more than ",
  "max": " must contain less than ",
  "latin": " should consist of latin alphabet.",
  "login": " can have only latin symbols, numbers, '-' and '_'.",
  "onlyNumbers": " can not consist only of numbers.",
  "upperSymbolNumber": " should be latin and has at least one uppercase symbol and one number.",
  "email": " should be correct.",
  "name": " should consist of cyrillic or latin alphabet, may contain '-'.",
  "firstUpperCase": " should start with uppercase.",
  "phone": " should be correct."
};

function _addError(errorField: string, errorType: string, errorText: string = "") {

  (event!.target! as HTMLInputElement).classList.add('invalid');

  const label = document.createElement("label");

  label.setAttribute("for", errorField);
  label.setAttribute("class", "error-message");

  errorField = errorField.replace('_', ' ')

  label.innerHTML = `${errorField}${ERRORS[errorType]}${errorText}`;

  (event!.target! as HTMLInputElement).after(label);
}

function _isEmpty():boolean {
  if(!(event!.target! as HTMLInputElement).value.trim()) {
    return true;
  }
  return false;
}

function _isMin(min: number):boolean {
  if((event!.target! as HTMLInputElement).value.length < min) {
    return true;
  }
  return false;
}

function _isMax(max: number):boolean {
  if((event!.target! as HTMLInputElement).value.length > max) {
    return true;
  }
  return false;
}

function _isFirstUpperCase() {
  const firstChar = (event!.target! as HTMLInputElement).value.substring(0, 1);

  if (firstChar == firstChar.toUpperCase()) {
    return true;
  }

  return false
}

function _isLatinEmail():boolean {
  const re = /^[\w-@]+$/;
  return re.test((event!.target! as HTMLInputElement).value);
}

function _isCorrectLogin():boolean {
  const re = /^[\w-]+$/;
  return re.test((event!.target! as HTMLInputElement).value);
}

function _isHasUpperSymbolAndNumber():boolean {
  const re = /^(?=.*?[A-Z])(?=.*[0-9]).*$/;
  return re.test((event!.target! as HTMLInputElement).value);
}

function _isValidName():boolean {
  const re = /^[a-zA-Zа-яА-ЯёЁ-]+$/;
  return re.test((event!.target! as HTMLInputElement).value);
}

function _isValidPhone():boolean {
  const re = /^[+]?\d+$/;
  return re.test((event!.target! as HTMLInputElement).value);
}

function _isValidEmail():boolean {
  const re = /^(.+)@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
  return re.test((event!.target! as HTMLInputElement).value);
}

function _isOnlyNumbers():boolean {
  const re = /^\d+$/;
  return re.test((event!.target! as HTMLInputElement).value);
}

export function checkField(nameField: string) {
  if (_isEmpty()) {
    _addError(nameField, "empty");
    return;
  }

  if(nameField === "login") {
    if(_isMin(3)) {
      _addError(nameField, "min", "3 symbols.");
    }

    if(_isMax(20)) {
      _addError(nameField, "max", "20 symbols.");
    }

    if(!_isCorrectLogin()) {
      _addError(nameField, "login");
    }

    if(_isOnlyNumbers()) {
      _addError(nameField, "onlyNumbers");
    }
    return;
  }

  if(nameField === "password") {
    if(_isMin(8)) {
      _addError(nameField, "min", "8 symbols.");
    }

    if(_isMax(40)) {
      _addError(nameField, "max", "40 symbols.");
    }

    if(!_isHasUpperSymbolAndNumber()) {
      _addError(nameField, "upperSymbolNumber");
    }

    return;
  }

  if(nameField === "email") {
    if(!_isLatinEmail()) {
      _addError(nameField, "latin");
    }

    if(!_isValidEmail()) {
      _addError(nameField, "email");
    }

    return;
  }


  if(nameField === "first_name" || nameField === "second_name") {
    if(!_isValidName()) {
      _addError(nameField, "name");
    }

    if(!_isFirstUpperCase()) {
      _addError(nameField, "firstUpperCase");
    }

    return;
  }

  if(nameField === "phone") {
    if(_isMin(10)) {
      _addError(nameField, "min", "10 symbols.");
    }

    if(_isMax(15)) {
      _addError(nameField, "max", "15 symbols.");
    }

    if(!_isValidPhone()) {
      _addError(nameField, "phone");
    }

    return;
  }

}
