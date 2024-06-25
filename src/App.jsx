import './App.css'
import Footer from './components/Footer/Footer'
import MobileNavToolBar from './components/Mobile-nav-toolbar/MobileNavToolBar'
import MoreLikeThis from './components/More-like-this/MoreLikeThis'
import Navbar from './components/Mobile-nav/MobileNavbar'
import ProductInfo from './components/Product-info/ProductInfo'
import Product from './components/Product/Product'

function App() {

  return (
    <div>
      <Navbar />
      <Product />
      <ProductInfo />
      <MoreLikeThis />
      <Footer />
      <MobileNavToolBar />
    </div>
  )
}

export default App
