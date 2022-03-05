import React from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

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
          <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
