import { Link } from "react-router-dom";
import img from '../../videos/not-found.svg'
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Error = ()=>{
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate('/');
      }, 2000)
    }, [])
    return (
    <div>
            <Navbar />
        <div className="full-page wrapper">
            <div>
                <img src={img} alt='not found' style={{maxWidth: "650px",display: "block",marginBottom: "2rem"}}/>
                <h2 style={{marginBottom: "0.5rem"}}>Ohh! page not found</h2>
                <p style={{marginBottom: "0.5rem", color: "var(--grey-500)"}}>We can't seem to find the page you're looking for</p>
                <Link to='/' style={{fontSize:"20px", fontWeight: "600"}}>Back Home</Link>
            </div>
        </div>
    </div>
    )
}

export default Error;
