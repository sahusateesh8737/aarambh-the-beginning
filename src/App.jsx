import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar' // Add this import statement
import Home from './components/Home' // Assuming you have a Home component
import About from './components/About' // Assuming you have an About component
import Team from './components/Team' // Assuming you have a Dashboard component
import Footer from './components/Footer'
import Event from './components/Event'
const router = createBrowserRouter(
[
  {path:"/",
    element: <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  },
  {path:"/about",
    element: <div>
    <Navbar/>
    <About/>
  </div>
  },
  {path:"/team",
    element: <div>
    <Navbar/>
    <Team/>
    <Footer/>
  </div>
  },
  {path:"/event",
    element: <div>
    <Navbar/>
    <Event/>
    <Footer/>
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

