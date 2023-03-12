export function required<T>(input: T): boolean {
  if (typeof input === "string") {
    return input.length > 0;
  }
  return input != undefined;
}

export function validEmail(email: string) {
  const pattern =
    /^[a-zA-Z\d\.-_]{1,64}@[a-zA-Z\d\.-_]{4,255}\.[a-zA-Z\d]{2,64}$/;
  return pattern.test(email);
}

export function validPassword(pass: string) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,64}$/;
  return pattern.test(pass);
}
