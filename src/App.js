import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import TransactionsContextProvider from "./context/transactionsContext";
import Payments from "./pages/Payments/Payments";

const router = createHashRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <></> },
      {
        path: "payments",
        element: (
          <TransactionsContextProvider>
            <Payments />
          </TransactionsContextProvider>
        ),
      },
      { path: "*", element: <></> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
