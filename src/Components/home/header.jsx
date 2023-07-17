import p1 from '../../images/headerStuf/p1.png'
import p2 from '../../images/headerStuf/p2.png'
import p3 from '../../images/headerStuf/p3.png'
import p4 from '../../images/headerStuf/p4.png'
import p5 from '../../images/headerStuf/p5.png'
import p6 from '../../images/headerStuf/p6.png'
import c3 from '../../images/headerStuf/c3.jpg'
import c2 from '../../images/aboutUs/c3.png'


const Header = () => {
    return (
        <div className="hero">
        {/* <img className='picture1' src={p1} alt="" width="220" />
        <img className='picture2' src={p2} alt="" width="220" />
        <img className='picture3' src={p3} alt="" width="220" />
        <img className='picture4' src={p4} alt="" width="220" />
        <img className='picture5' src={p5} alt="" width="220" />
        <img className='picture6' src={p6} alt="" width="220" /> */}
        <img className='centerPicture' src={c2} alt="" />
        <h1>Discover the art of fine <br />dining and elevate your taste experience with us</h1>
    </div>
    )
}

export default Header;