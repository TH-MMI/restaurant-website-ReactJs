import logo from '../../images/logo.png'

const Footer =() => {
    return(
        <div class="footer">
        <img src={logo} alt="" width="60" />

        <div class="footer-content">
            <div class="infos">
                <p>info@food.com</p>
                <p>+212 625147895</p>
                <p>201 street one , Kenitra</p>
            </div>
            <div class="time">
                <p>Tuesday-thusday : 12am - 9pm</p>
                <p>Friday - Sunday : 12am - 11pm</p>
                <p>Monday : Closed</p>
            </div>
        </div>
    </div>
    )
}

export default Footer;