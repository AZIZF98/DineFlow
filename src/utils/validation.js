export function isEmail(email) {
  if (!email.includes("@")) {
    return false;
  }
  return true;
}

export function isNotEmpty(value) {
  if (value < 1) {
    return false;
  }
  return true;
}

export function hasMinLength(value, minNumber) {
  if (value < minNumber) {
    return false;
  }
  return true;
}
