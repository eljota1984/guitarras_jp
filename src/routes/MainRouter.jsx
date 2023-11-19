import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import NavBarcomponent from "../Components/NavbarComponent/NavBarcomponent";
import Category from "../pages/Category";
import Item from "../pages/Item";

const MainRoutes = () => {
    return (
        <Router>
            <NavBarcomponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:id" element={<Item />} />
            </Routes>
        </Router>
    );
};

export default MainRoutes