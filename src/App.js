import { Route } from "react-router-dom";
import ContactAdderPage from "./Pages/ContactAdderPage";
import ContactDetailsPage from "./Pages/ContactDetailsPage";
import ContactListPage from "./Pages/ContactListPage";

function App() {
  return (
    <>
      <Route path='/' exact>
        <ContactListPage />
      </Route>
      <Route path='/contacts'>
        <ContactListPage />
      </Route>
      <Route path='/contact-details/:id'>
        <ContactDetailsPage />
      </Route>
      <Route path='/add-contact'>
        <ContactAdderPage />
      </Route>
    </>
  );
}
export default App;
