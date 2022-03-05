import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
      <nav></nav>
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
