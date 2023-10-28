import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => {

  return (
    <>
      <Header/>
      <RouterProvider router={appRouter} />

    </>
  );

}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children : [
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/SignUp',
        element: <SignUp />
      }
    ]
  },
]);

export default App;
