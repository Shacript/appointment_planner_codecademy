import React from "react";

export const ContactPicker = ({ onChange, contacts, contact }) => {
  return (
    <select value={contact} onChange={onChange}>
      {contacts &&
        contacts.map((contact, index) => (
          <option selected={index === 0} key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
    </select>
  );
};
