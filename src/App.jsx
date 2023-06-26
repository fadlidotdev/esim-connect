import { Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";

const App = () => {
  return (
    <Switch>
      <Route exact path={["/privacy", "/en/privacy", "/id/privacy"]}>
        <PrivacyAndPolicy />
      </Route>

      <Route path={"/" || "/en" || "/id" || "*"}>
        <Index />
      </Route>
    </Switch>
  );
};

export default App;
