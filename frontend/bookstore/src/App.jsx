import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/Login/",
    element: <Login />
  },
  {
    path : "/home" ,
    element : <Homepage /> ,
    
  } ,
  {
    path : "/" ,
    element : <Homepage /> ,
    
  },
])
function App() {
  
  

  return (
    <RouterProvider router={router} />  
  )
}

export default App
