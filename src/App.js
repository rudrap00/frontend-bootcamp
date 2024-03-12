import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

import { Payments } from "./pages/Payments/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <></> },
      { path: "orders", element: <></> },
      { path: "products", element: <></> },
      { path: "delivery", element: <></> },
      { path: "analytics", element: <></> },
      { path: "payments", element: <Payments /> },
      { path: "tools", element: <></> },
      { path: "discounts", element: <></> },
      { path: "audience", element: <></> },
      { path: "appearance", element: <></> },
      { path: "plugins", element: <></> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
