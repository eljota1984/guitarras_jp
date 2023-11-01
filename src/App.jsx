import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarcomponent from './Components/NavbarComponent/NavBarcomponent';
import '../src/index.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {


  return (
    <div>
      <NavBarcomponent />
      <ItemListContainer greeting = "¡Bienvenidos a guitarras JP!"/>
    </div>
  )
}

export default App
