import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        required
      />
      <input
        value={phone}
        pattern="^[0-9]\d{2}\d{3}\d{4}$"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="phone number example (0123456789)"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      />
      <input type="submit" value="Submit"/>
    </form>
  );
};
