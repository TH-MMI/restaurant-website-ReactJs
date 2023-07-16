import p1 from '../../images/headerStuf/p1.png'
import p2 from '../../images/headerStuf/p2.png'
import p3 from '../../images/headerStuf/p3.png'
import p4 from '../../images/headerStuf/p4.png'
import p5 from '../../images/headerStuf/p5.png'
import p6 from '../../images/headerStuf/p6.png'
import c3 from '../../images/headerStuf/c3.jpg'

const Header = () => {
    return (
        <div class="hero">
        <img class='p1' src={p1} alt="" width="220" />
        <img class='p2' src={p2} alt="" width="220" />
        <img class='p3' src={p3} alt="" width="220" />
        <img class='p4' src={p4} alt="" width="220" />
        <img class='p5' src={p5} alt="" width="220" />
        <img class='p6' src={p6} alt="" width="220" />
        <img class='c2' src={c3} alt="" />
        <h1>Discover the art of fine dining and elevate <br /> your taste experience with us</h1>
    </div>
    )
}

export default Header;