// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Home from "../pages/Home";
// import NavBarcomponent from "../Components/NavbarComponent/NavBarcomponent";
// import Category from "../pages/Category";
// import Item from "../pages/Item";

// const MainRoutes = () => {
//     return (
//         <Router>
//             <NavBarcomponent />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/category/:categoryId" element={<Category />} />
//                 <Route path="/item/:id" element={<Item />} />
//             </Routes>
//         </Router>
//     );
// };

// export default MainRoutes; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import {NavBarComponent} from "../Components/NavbarComponent/NavBarcomponent";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import Category from "../pages/Category";

export const MainRouter = () => {
  //HOC - High Order Component
  // Siempre SIEMPRE SIEMPREEEE se debe crear una ruta por cada pagina
  //Parametro por url

  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MainRouter;