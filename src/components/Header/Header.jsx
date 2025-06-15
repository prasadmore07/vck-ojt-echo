import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <p>Vivekanand Collage</p>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </>
    )
}


export default Header; 