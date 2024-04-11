import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Homepage from './components/Homepage';

const router = createBrowserRouter([
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
