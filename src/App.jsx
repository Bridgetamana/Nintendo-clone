import './App.css'
import Footer from './components/Footer/Footer'
import MobileNavToolBar from './components/Mobile-nav-toolbar/MobileNavToolBar'
import MoreLikeThis from './components/More-like-this/MoreLikeThis'
import Navbar from './components/Mobile-nav/MobileNavbar';
import ProductInfo from './components/Product-info/ProductInfo'
import Product from './components/Product/Product';
import DesktopNavBar from './components/Desktop-Navigation/DesktopNavBar';
import TopDrawer from './components/Top-drawer/TopDrawer';
import GameDescription from './components/Game-Description/GameDescription';

function App() {

  return (
    <div>
      <TopDrawer />
      <div className='mobile-nav'>
        <Navbar />
      </div>
      <div className='desktop-nav'>
        <DesktopNavBar />
      </div>
      <Product />
      <GameDescription />
      <ProductInfo />
      <MoreLikeThis />
      <Footer />
      <MobileNavToolBar />
    </div>
  )
}

export default App
