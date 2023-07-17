import c2 from '../../images/aboutUs/c2.png'
import c3 from '../../images/aboutUs/c3.jpg'

const AboutUs = () => {
    return (
        <div className="aboutus">
            <h1>About Us</h1>
            <div className="aboutUsContent">
                
                <div className='aboutUsPictures'>
                    <img className='c2' src={c2} alt="" width='700' />
                    <img className='c1' src={c3} alt="" width='400' />
                </div>
                <div className="paragraph">
                    <p>
                        Welcome to [restaurant name], where our passion for food and hospitality come together to create a dining
                        experience unlike any other. Our team of expert chefs use only the freshest, locally sourced ingredients to
                        create dishes that are not only delicious but also visually stunning. We believe that dining should be an
                        immersive experience, where every aspect of the meal, from the ambiance to the presentation, contributes to a
                        memorable culinary journey. At [restaurant name], we strive to exceed your expectations and create a warm and
                        inviting atmosphere where you can relax, savor, and enjoy. Come join us for an unforgettable dining experience.
                    </p>
                </div>

            </div>
            <div className='line'></div>

        </div>
    )
}

export default AboutUs;