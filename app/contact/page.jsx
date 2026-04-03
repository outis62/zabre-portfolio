"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO, SERVICES, FORM_FIELDS } from "/config/contact.config";
import { useContactForm } from "/hooks/useContactForm";
import {
  ContactHeader,
  Field,
  ServiceSelect,
  MessageArea,
  SubmitRow,
  InfoSidebar,
} from "@/components/form/Contact";
import "/styles/contact.css";

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

function groupByRow(fields) {
  return fields.reduce((acc, f) => {
    (acc[f.row] ??= []).push(f);
    return acc;
  }, {});
}

export default function Contact() {
  const { form, status, focused, handleChange, handleFocus, handleBlur, handleSubmit } =
    useContactForm();

  const rows = groupByRow(FORM_FIELDS);

  return (
    <motion.section className="contact-root" initial="hidden" animate="visible" variants={container}>
      <div className="contact-inner">

        <motion.div variants={item}>
          <ContactHeader />
        </motion.div>

        <div className="contact-grid">

          <motion.form className="contact-form" onSubmit={handleSubmit} variants={item} noValidate>

            {Object.values(rows).map((rowFields, idx) => (
              <div key={idx} className="field-row">
                {rowFields.map((field) => (
                  <Field
                    key={field.name}
                    field={field}
                    value={form[field.name]}
                    isFocused={focused === field.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                ))}
              </div>
            ))}

            <ServiceSelect
              services={SERVICES}
              value={form.service}
              isFocused={focused === "service"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <MessageArea
              value={form.message}
              isFocused={focused === "message"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <SubmitRow status={status} />
          </motion.form>

          <motion.div variants={item}>
            <InfoSidebar info={CONTACT_INFO} />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}