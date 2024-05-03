import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Memberinfo from "./components/Memberinfo";
import Transactioninfo from "./components/Transactioninfo";
// import Books from './components/Books';
import BookUpdate from './components/BookUpdate';
import UserInfo from'./components/UserInfo';
import UserUpdate from "./components/UserUpdate";
import TransactionUpdate from "./components/TransactionUpdate";
import Bookinfo from "./components/Bookinfo";
import BookList from "./components/BookList";

const router = createBrowserRouter([
  {
    path: "/book/info/:bookID",
    element: <Bookinfo />,
  },
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
    element: <BookList />,
  },
  {
    path : '/books/add',
    element : <BookUpdate />
  },
  {
    path : '/members/info/:infoId' ,
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
