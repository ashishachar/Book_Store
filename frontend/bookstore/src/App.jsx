import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Memberinfo from "./components/Memberinfo";
import Transactioninfo from "./components/Transactioninfo";
import Books from './components/Books';
import BookUpdate from './components/BookUpdate';
import UserInfo from'./components/UserInfo';
import UserUpdate from "./components/UserUpdate";
import TransactionUpdate from "./components/TransactionUpdate";

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
    path: "/transactions/add",
    element: <TransactionUpdate />,
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
    path : '/members/info/' ,
    element : <UserInfo/>
  } ,
  {
    path : '/members/add/' ,
    element : <UserUpdate/>
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
