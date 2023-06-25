import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/id",
    element: <Index />,
  },
  {
    path: "/en",
    element: <Index />,
  },

  {
    path: "/privacy-and-policy",
    element: <PrivacyAndPolicy />,
  },
  {
    path: "/id/privacy-and-policy",
    element: <PrivacyAndPolicy />,
  },
  {
    path: "/en/privacy-and-policy",
    element: <PrivacyAndPolicy />,
  },
  {
    path: "/*",
    element: <Index />,
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
