import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import Footer from './components/Footer';
import MainPage from "./pages/MainPage.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <MainPage />,
        },
        {
            path: '/home',
            element: <HomePage />,
        },
        {
            path: '/login',
            element: <LoginPage toggleModal={() => {}} />
        },
        {
            path: '/signup',
            element: <SignupPage toggleSignupModal={() => {}} />,
        },

    ]);

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <div className="flex-grow">
                <RouterProvider router={routes} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
