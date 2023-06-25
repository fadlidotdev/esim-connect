import { Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <Switch>
      <Route path="/en/privacy-and-policy">
        <PrivacyAndPolicy />
      </Route>

      <Route path="/id/privacy-and-policy">
        <PrivacyAndPolicy />
      </Route>

      <Route path="/privacy-and-policy">
        <PrivacyAndPolicy />
      </Route>

      <Route path={"/" || "/en" || "/id" || "*"}>
        <Index />
      </Route>
    </Switch>
  );
};

export default App;
