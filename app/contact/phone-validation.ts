export const MIN_PHONE_DIGITS = 7;
export const MAX_E164_DIGITS = 15;

const ALLOWED_PHONE_CHARACTERS = /^[0-9\s().-]+$/;

export function validatePhoneNumber(value: string, countryCode: string): string {
  const trimmedValue = value.trim();
  if (!trimmedValue) return "Enter a phone number.";

  if (!ALLOWED_PHONE_CHARACTERS.test(trimmedValue)) {
    return "Use only numbers, spaces, parentheses, periods, or hyphens.";
  }

  const localDigits = trimmedValue.replace(/\D/g, "");
  if (localDigits.length < MIN_PHONE_DIGITS) {
    return `Enter at least ${MIN_PHONE_DIGITS} digits after the country code.`;
  }

  const countryCodeDigits = countryCode.replace(/\D/g, "").length;
  const maximumLocalDigits = MAX_E164_DIGITS - countryCodeDigits;
  if (localDigits.length > maximumLocalDigits) {
    return `Enter no more than ${maximumLocalDigits} digits for this country code.`;
  }

  return "";
}
