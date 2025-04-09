import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import RecipeDetails from "./pages/RecipeDetails";
import Login from "./pages/LoginPage.tsx";
import Signup from "./pages/SignupPage.tsx";
import CreateRecipe from "./pages/CreateRecipe";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage.tsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/recipes" element={<RecipePage />} />
                <Route path="/recipes/:id" element={<RecipeDetails />} />
                <Route path="/login" element={<Login  />}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/create-recipe" element={<CreateRecipe />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
