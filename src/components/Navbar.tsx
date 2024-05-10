import { Link } from "react-router-dom"

export const Navbar = () => {
    return  <nav style={{
            padding: "16px",
            backgroundColor: "gray",
            textAlign:"center"
        }}>
        <Link to="/">TEMIRRUN</Link>
        </nav>
       
}