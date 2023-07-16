import logo from '../images/logo.png'
const NavBar = () => {
    return (
        <nav class="navbar" id="navBarContainer" >
            <div class='logo' id="navBarLogo" >
                <a href="/">
                    <img src={logo} alt="" width='50' />
                </a>
         </div >
         <ul>
             <li><a href="/">HOME</a></li>
             <li><a href="/menu">OUR MENUS</a></li>
             <li><a href="/store">SHOP</a></li>
             <li><a href="">FIND US</a></li>
         </ul>
         <div class='logo'>
             <a class='btn login' href="/login">LOG IN</a>
             <a class='btn' href="/register">JOIN US</a>
         </div>
     </nav >
    )
}

export default NavBar;