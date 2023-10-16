import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <ul className="nav-list">
            <li>
              <Link className="nav-list__item" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-list__item" to={"/favorites"}>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
