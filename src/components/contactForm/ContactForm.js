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
  // Add Phone Format !
  const onTypingPhone = (e) => {
    let value = e.target.value;
    if (value.length >= 10 && value.length < 12) {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
    }
    setPhone(value);
  };

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
        pattern="^[0-9]\d{2}-\d{3}-\d{4}$"
        onChange={onTypingPhone}
        placeholder="phone number example (012-345-6789)"
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
