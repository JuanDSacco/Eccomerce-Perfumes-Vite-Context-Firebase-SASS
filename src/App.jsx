import '../src/styles/sass/styles.scss'
import '../src/styles/css/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Routes/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Routes/Home/Home'
import ItemDetailContainer from './Routes/ItemDetailContainer/ItemDetailContainer'
import Cart from './Routes/Cart/Cart'
import ContextProvider from './context/CartContext'
import Form from './Routes/Form/Form'
import Detalle from './Routes/Detalle/Detalle'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <ContextProvider>
            <Header/>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/detalle' element={<Detalle/>}/>
            </Routes>
            <Footer/>
          </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
