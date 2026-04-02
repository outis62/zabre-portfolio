export const CONTACT_INFO = [
  {
    id: "phone",
    icon: "phone",
    label: "Phone",
    value: "(+226) 74352563 / 62694878",
    href: "tel:+22674352563",
  },
  {
    id: "email",
    icon: "email",
    label: "Email",
    value: "zabreboureima236@gmail.com",
    href: "mailto:zabreboureima236@gmail.com",
  },
  {
    id: "address",
    icon: "location",
    label: "Address",
    value: "Karpala, Ouagadougou, Burkina Faso",
    href: null,
  },
];

export const SERVICES = [
  { value: "web-dev",     label: "Web Development" },
  { value: "network",     label: "Network System Engineer" },
  { value: "marketing",   label: "Digital Marketing" },
];

export const COPY = {
  eyebrow:     "Get in touch",
  title:       ["Let's build something", "remarkable"],  
  description: "Whether you need a powerful website, network solutions, or a sharp digital strategy — I'm ready to collaborate and make it happen.",
  availability: "Available for new projects",
  submit: {
    idle:    "Send message",
    sending: "Sending…",
    success: "✓ Message sent successfully!",
    error:   "✗ Failed to send. Please try again.",
  },
};

export const FORM_FIELDS = [
  
  { name: "firstname", label: "First name",     type: "text",  required: true,  row: 1 },
  { name: "lastname",  label: "Last name",      type: "text",  required: false, row: 1 },

  { name: "email",     label: "Email address",  type: "email", required: true,  row: 2 },
  { name: "phone",     label: "Phone number",   type: "tel",   required: false, row: 2 },
];

export const INITIAL_FORM = {
  firstname: "", lastname: "", email: "",
  phone: "", service: "", message: "",
};

export const API_ENDPOINT = "/api/send-email";