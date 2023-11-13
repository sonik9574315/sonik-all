import { Link ,NavLink } from "react-router-dom";
import '../../src/css/login.css'
const Navbar = () => {
    return ( <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbarColor"  >
  <div className="container-fluid">
    <div className="m-3">
    <Link className="navbar-brand"  style={{fontWeight:'bold'}} to="#">سایت گرافی</Link>
    <img src='#' alt="" />
    </div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-5" id="navbarNav">
      <ul className="navbar-nav p-3 m-1">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">صفحه اصلی</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services">خدمات</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">ورود</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">ثبت نام</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/example">نمونه ها </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">دانش پذیران اخیر  </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </> );
}
 
export default Navbar;