import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Memberinfo from "./components/Memberinfo";
import Transactioninfo from "./components/Transactioninfo";

const router = createBrowserRouter([
  {
    path: "/members/",
    element: <Memberinfo />,
  },
  {
    path: "/transactions/",
    element: <Transactioninfo />,
  },
  {
    path: "/login/",
    element: <Login />,
  },
  {
    path: "/home/",
    element: <Homepage />,
  },
  {
    path: "/books/",
    element: <Books />,
  },
  {
    path : '/books/add',
    element : <BookUpdate />
  },
  {
    path : '/users/info/' ,
    element : <UserInfo/>
  } ,
  {
    path: "/",
    element: <Homepage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
