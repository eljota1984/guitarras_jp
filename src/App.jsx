
import MainRouter from './routes/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'


function App() {


  return (
    <div>
      <MainRouter />
    </div>
  )
}

export default App

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { NavBarComponent } from "./Components/NavbarComponent/NavBarcomponent";
// import { ItemDetailContainer } from "./pages/ItemDetailContainer";
// import Category from "./pages/Category";

// export const MainRouter = () => {
//   //HOC - High Order Component
//   // Siempre SIEMPRE SIEMPREEEE se debe crear una ruta por cada pagina
//   //Parametro por url

//   return (
//     <BrowserRouter>
//       <NavBarComponent />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/item/:productId" element={<ItemDetailContainer />} />
//         <Route path="/category/:categoryId" element={<Category />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };