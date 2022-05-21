import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

  import { Cart, Home, Login, ProductsPage, Register, SingleProductPage } from '../pages'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products/:category' element={<ProductsPage />}/>
                <Route path='/products' element={<ProductsPage />}/>
                <Route path='/product/:id' element={<SingleProductPage />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing