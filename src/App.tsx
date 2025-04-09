import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage.tsx";
import Signup from "./pages/SignupPage.tsx";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage.tsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/login" element={<Login  />}/>
                <Route path="/signup" element={<Signup />} />



            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
