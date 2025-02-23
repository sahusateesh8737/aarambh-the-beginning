import './App.css'
import { Analytics } from '@vercel/analytics/react';
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
    <br></br>
    <Footer/>
  </div>
  },
  {path:"/team",
    _element: <div>
      <Navbar />
      <Team />
      <Footer />
      <br/>
    </div>,
    get element() {
      return this._element;
    },
    set element(value) {
      this._element = value;
    },
  },
  {path:"/event",
    element: <div>
    <Navbar/>
    <Event/>
    <br/>
    <Footer/>
  </div>
  },
]

);
function App() {
  return (
  <div>
      <RouterProvider router={router}/>
      <Analytics />
    </div>
  )
}

export default App

