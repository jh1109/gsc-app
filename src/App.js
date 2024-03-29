import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/Mainpage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage />},
  { path: '/contact', element: <ContactPage />},
]);

function App() {
  return (
    <>
    <GlobalStyle/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
