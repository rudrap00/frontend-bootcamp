import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/index";

import {
  Analytics,
  Appearance,
  Audience,
  Delivery,
  Discounts,
  Home,
  Orders,
  Payments,
  Plugins,
  Products,
  Tools,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <Home /> },
      { path: "orders", element: <Orders /> },
      { path: "products", element: <Products /> },
      { path: "delivery", element: <Delivery /> },
      { path: "analytics", element: <Analytics /> },
      { path: "payments", element: <Payments /> },
      { path: "tools", element: <Tools /> },
      { path: "discounts", element: <Discounts /> },
      { path: "audience", element: <Audience /> },
      { path: "appearance", element: <Appearance /> },
      { path: "plugins", element: <Plugins /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
