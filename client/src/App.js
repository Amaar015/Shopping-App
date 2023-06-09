import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import PageNot from './Pages/PageNot'
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/user/Dashboard';
import { useSelector } from 'react-redux';
import Spinner from './Components/Spinner';
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import ForgotPass from './Pages/Auth/ForgotPass';
import CreateCategory from './Pages/admin/CreateCategory'
import CreateProduct from './Pages/admin/Createproduct'
import Users from './Pages/admin/Users'
import Profile from './Pages/user/Profile'
import UserOrders from './Pages/user/UserOrders';
import Products from './Pages/admin/Products';
import UpdateProduct from './Pages/admin/UpdateProduct';
import Searchs from './Pages/Searchs';
import ProductDetails from './Pages/ProductDetails';
import Categories from './Pages/Categories';
import CategoryProduct from './Components/CategoryProduct';
import Cart from './Pages/Cart';
const App = () => {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
        {loading ? (<Spinner />) : (
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />

            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path='/search' element={
              // <ProtectedRoute>
              <Searchs />
              // </ProtectedRoute>
            } />
            <Route path='/product/:slug' element={
              // <ProtectedRoute>
              <ProductDetails />
              // </ProtectedRoute>
            } />
            <Route path='/cart' element={
              // <ProtectedRoute>
              <Cart />
              // </ProtectedRoute>
            } />
            <Route path='/category/:slug' element={
              // <ProtectedRoute>
              <CategoryProduct />
              // </ProtectedRoute>
            } />
            <Route path='/categories' element={
              // <ProtectedRoute>
              <Categories />
              // </ProtectedRoute>
            } />

            {/* Admin routes start */}
            <Route path='/dashboard/admin/create-category' element={
              <ProtectedRoute>
                <CreateCategory />
              </ProtectedRoute>
            } />
            <Route path='/dashboard/admin/products' element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            } />


            <Route path='/dashboard/admin/create-product' element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            } />

            <Route path='/dashboard/admin/user' element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            } />
            <Route path='/dashboard/admin/product/:slug' element={
              <ProtectedRoute>
                <UpdateProduct />
              </ProtectedRoute>
            } />


            {/* Admin routes end */}
            {/* Users routes start */}
            <Route path='/dashboard/user/profile/:id' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path='/dashboard/user/orders' element={
              <ProtectedRoute>
                <UserOrders />
              </ProtectedRoute>
            } />
            {/* Users routes end */}

            <Route path='/about' element={<About />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/register' element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route path='/login' element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path='/forget-password' element={
              <PublicRoute>
                <ForgotPass />
              </PublicRoute>
            } />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNot />} />

          </Routes >)}
      </BrowserRouter>
    </>
  )
}

export default App