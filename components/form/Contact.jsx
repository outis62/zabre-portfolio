import { COPY } from "../../config/contact.config";
const ICONS = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.6A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M3 10h14M11 4l6 6-6 6"/>
    </svg>
  ),
};

export function ContactHeader() {
  const [line1, line2] = COPY.title;
  return (
    <header className="contact-header">
      <p className="contact-eyebrow">{COPY.eyebrow}</p>
      <h1 className="contact-title">
        {line1}<br /><em>{line2}</em>
      </h1>
      <p className="contact-desc">{COPY.description}</p>
    </header>
  );
}

export function Field({ field, value, isFocused, onChange, onFocus, onBlur }) {
  return (
    <div className={`field-wrap${isFocused ? " is-focused" : ""}`}>
      <label className="field-label" htmlFor={field.name}>{field.label}</label>
      <input
        id={field.name}
        className="field-input"
        type={field.type}
        name={field.name}
        placeholder={field.label}
        value={value}
        required={field.required}
        onChange={onChange}
        onFocus={() => onFocus(field.name)}
        onBlur={onBlur}
      />
    </div>
  );
}

export function ServiceSelect({ services, value, isFocused, onChange, onFocus, onBlur }) {
  return (
    <div className={`field-wrap${isFocused ? " is-focused" : ""}`}>
      <label className="field-label" htmlFor="service">Service</label>
      <select
        id="service"
        className="field-input field-select"
        name="service"
        value={value}
        onChange={onChange}
        onFocus={() => onFocus("service")}
        onBlur={onBlur}
      >
        <option value="">Select a service</option>
        {services.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>
    </div>
  );
}

export function MessageArea({ value, isFocused, onChange, onFocus, onBlur }) {
  return (
    <div className={`field-wrap${isFocused ? " is-focused" : ""}`}>
      <label className="field-label" htmlFor="message">Message</label>
      <textarea
        id="message"
        className="field-input field-textarea"
        name="message"
        placeholder="Tell me about your project…"
        value={value}
        required
        onChange={onChange}
        onFocus={() => onFocus("message")}
        onBlur={onBlur}
      />
    </div>
  );
}

export function SubmitRow({ status }) {
  const isSending = status === "sending";
  return (
    <div className="submit-row">
      <button type="submit" className="submit-btn" disabled={isSending}>
        {isSending ? COPY.submit.sending : (
          <>{COPY.submit.idle} <span className="arrow">{ICONS.arrow}</span></>
        )}
      </button>
      {status === "success" && <span className="status-msg status-success">{COPY.submit.success}</span>}
      {status === "error"   && <span className="status-msg status-error"  >{COPY.submit.error  }</span>}
    </div>
  );
}

export function InfoSidebar({ info }) {
  return (
    <aside className="info-sidebar">
      <div className="info-divider" />
      {info.map((item) => {
        const content = (
          <div className="info-item">
            <div className="info-icon-wrap" aria-hidden="true">{ICONS[item.icon]}</div>
            <div>
              <p className="info-label">{item.label}</p>
              <p className="info-value">{item.value}</p>
            </div>
          </div>
        );
        return (
          <div key={item.id}>
            {item.href
              ? <a href={item.href} className="info-link">{content}</a>
              : content
            }
            <div className="info-divider" />
          </div>
        );
      })}
      <p className="availability" role="status">
        <span className="availability-dot" aria-hidden="true" />
        {COPY.availability}
      </p>
    </aside>
  );
}