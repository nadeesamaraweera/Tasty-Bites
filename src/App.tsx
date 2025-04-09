import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Footer from './components/Footer';

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
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
