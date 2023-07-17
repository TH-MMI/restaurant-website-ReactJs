import AboutUs from './aboutUs';
import Footer from './footer';
import Gallery from './gallery';
import Header from './header';
import HotSales from './hotSales';
import NavBar from './navBar'
import '../../css/home.css'
import '../../css/mobileSize.css'

function Home() {
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

export default Home;
