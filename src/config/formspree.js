// Formspree: we only need the Form ID (not the full endpoint).
// Example: https://formspree.io/f/xdkkyezn -> Form ID is `xdkkyezn`.
const raw = String(import.meta.env.VITE_FORMSPREE_FORM_ID ?? '').trim();

// @formspree/react useForm() throws if the key is falsy, which would crash any
// page using it when VITE_FORMSPREE_FORM_ID is unset. Submissions need a real ID.
export const FORMSPREE_FORM_ID = raw || 'missing-vite-formspree-form-id';
