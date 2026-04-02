import { useState, useCallback } from "react";
import { INITIAL_FORM, API_ENDPOINT } from "../config/contact.config";

/** @typedef {"idle" | "sending" | "success" | "error"} FormStatus */

/**
 * @returns {{
 *   form: typeof INITIAL_FORM,
 *   status: FormStatus,
 *   focused: string | null,
 *   handleChange: (e: React.ChangeEvent) => void,
 *   handleFocus:  (name: string) => void,
 *   handleBlur:   () => void,
 *   handleSubmit: (e: React.FormEvent) => void,
 * }}
 */
export function useContactForm() {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [status,  setStatus]  = useState("idle");
  const [focused, setFocused] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFocus = useCallback((name) => setFocused(name), []);
  const handleBlur  = useCallback(() => setFocused(null), []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!form.firstname || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch(API_ENDPOINT, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error("[ContactForm]", err);
      setStatus("error");
    }
  }, [form]);

  return { form, status, focused, handleChange, handleFocus, handleBlur, handleSubmit };
}