import AboutUs from './Components/aboutUs';
import Footer from './Components/footer';
import Gallery from './Components/gallery';
import Header from './Components/header';
import HotSales from './Components/hotSales';
import NavBar from './Components/navBar'
import './css/home.css'
function App() {
  return (
    <>
    <NavBar />
    <Header />
    <HotSales />
    <AboutUs />
    <Gallery />
    <Footer />
    </>
  );
}

export default App;
