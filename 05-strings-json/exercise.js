export function shout(text) {
  return text.trim().toUpperCase();
}

export function initials(fullName) {
  return fullName.split(" ").map(part => part[0]).join("").toUpperCase();
}

export function toJson(product) {
  return JSON.stringify(product);
}

export function displayName(student) {
  return student.name || "Unknown student";
}

export function summaryFromJson(jsonText) {
  const { name, price } = JSON.parse(jsonText);
  return `${name} costs ${price} EGP`;
}