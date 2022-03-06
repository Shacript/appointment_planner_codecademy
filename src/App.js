import React, { useState } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone_number, email) => {
    setContacts((prevArray) => [
      ...prevArray,
      {
        name,
        phone_number,
        email,
      },
    ]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prevArray) => [
      ...prevArray,
      {
        title,
        contact,
        date,
        time,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink
          to={ROUTES.CONTACTS}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contacts
        </NavLink>
        <NavLink
          to={ROUTES.APPOINTMENTS}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<Navigate to={ROUTES.CONTACTS} />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} />} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
