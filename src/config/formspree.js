// Formspree: we only need the Form ID (not the full endpoint).
// Example: https://formspree.io/f/xdkkyezn -> Form ID is `xdkkyezn`.
export const FORMSPREE_FORM_ID = String(
  import.meta.env.VITE_FORMSPREE_FORM_ID || '',
).trim();
