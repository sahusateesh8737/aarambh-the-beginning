import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar' // Add this import statement
import Home from './components/Home' // Assuming you have a Home component
import About from './components/About' // Assuming you have an About component
import Dashboard from './components/Dashboard' // Assuming you have a Dashboard component

const router = createBrowserRouter(
[
  {path:"/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {path:"/about",
    element: <div>
    <Navbar/>
    <About/>
  </div>
  },
  {path:"/dashboard",
    element: <div>
    <Navbar/>
    <Dashboard/>
  </div>
  },
]

);
function App() {
  return (
  <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

