export default function formatCreditCardNumber(value) {
  const number = value
    .toString()
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "");
  const parts = [];

  for (let i = 0; i < number.length; i += 4) {
    parts.push(number.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
}