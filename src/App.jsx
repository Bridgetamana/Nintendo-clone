import './App.css'
import Footer from './components/Footer/Footer'
import MobileNavToolBar from './components/Mobile-nav-toolbar/MobileNavToolBar'
import MoreLikeThis from './components/More-like-this/MoreLikeThis'
import Navbar from './components/Mobile-nav/MobileNavbar'
import ProductInfo from './components/Product-info/ProductInfo'
import Product from './components/Product/Product'
import DesktopNavBar from './components/Desktop-Navigation/DesktopNavBar'

function App() {

  return (
    <div>
      <div className='mobile-nav'>
        <Navbar />
      </div>
      <div className='desktop-nav'>
        <DesktopNavBar />
      </div>
      <Product />
      <ProductInfo />
      <MoreLikeThis />
      <Footer />
      <MobileNavToolBar />
    </div>
  )
}

export default App
