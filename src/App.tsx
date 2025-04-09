import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './pages/HomePage.tsx';

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <WelcomePage />, // ✅ Shows WelcomePage on root path
        },
        // You can add more routes like this:
        // {
        //   path: '/login',
        //   element: <LoginPage />
        // },
        // {
        //   path: '/signup',
        //   element: <SignupPage />
        // },
    ]);

    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
