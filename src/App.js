import './App.css';
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import About from './components/About';
import Main from './components/Main';
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/about',
        element: <About />
      },

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
