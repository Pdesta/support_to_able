const BUSINESS_EMAIL = "Supporttoable@gmail.com";

function valueToText(value: FormDataEntryValue): string {
  if (value instanceof File) {
    return value.name ? `[Attach manually: ${value.name}]` : "";
  }
  return value.trim();
}

export function openEmailFromForm(
  form: HTMLFormElement,
  subject: string,
  heading: string,
): void {
  const formData = new FormData(form);
  const lines = [heading, ""];

  for (const [key, rawValue] of formData.entries()) {
    const value = valueToText(rawValue);
    if (!value) continue;

    const label = key
      .replace(/^p_/, "Participant ")
      .replace(/^r_/, "Referrer ")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (character) => character.toUpperCase());

    lines.push(`${label}: ${value}`);
  }

  lines.push("", "Sent from supporttoable.com.au");

  const mailto = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  window.location.href = mailto;
}
