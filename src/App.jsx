import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Container, Footer, Header } from './components'
import {Product, Category, Home, NoPage, Room, Search, Cart, Contact, Login, SignUp} from './pages/'

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/category/:category' element={<Category />} />
              <Route path='/room/:room' element={<Room />} />
              <Route path='/search' element={<Search />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NoPage />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
            </Routes>
          </main>
          <Footer />
        </Container>
      </div>
    </>
  )
}

export default App
