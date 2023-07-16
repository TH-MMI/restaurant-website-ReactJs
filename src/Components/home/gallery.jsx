import l1 from '../../images/gallery/l1.jpg'
import l2 from '../../images/gallery/l2.jpg'
import l3 from '../../images/gallery/l3.jpg'
import l4 from '../../images/gallery/l4.jpg'
import l5 from '../../images/gallery/l5.jpg'
import l6 from '../../images/gallery/l6.jpg'

const Gallery = () => {
    return (
        <div class="imagelist">
        <img class='l1' src={l1} alt="" width='160' />
        <img class='l2' src={l2} alt="" width='160' />
        <img class='l3' src={l3} alt="" width='160' />
        <img class='l4' src={l4} alt="" width='160' />
        <img class='l5' src={l6} alt="" width='160' />
    </div>
    )
}

export default Gallery;