import "./index.css";
import spa from "../../../../images/SpaBannerPNG.png";
import { Button, Wrapper } from "../../componentsImport";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="background">
      <nav className="header--links-nav">
        <Wrapper>
          <ul className="header--links-ul">
            <li className="header--links-li">
              <Link to="/about">
                <Button style="header--button">Apie mus</Button>
              </Link>
            </li>
            <li className="header--links-li">
              <Link to="/price">
                <Button style="header--button">Paslaugos ir kainos</Button>
              </Link>
            </li>
            <Link to='/'>
            <img src={spa} className="header--spa"/>
            </Link>
            <Link className="header--links-li">
              <Link to="/galery">
                <Button style="header--button">Galerija</Button>
              </Link>
            </Link>
            <li className="header--links-li">
              <Link to="/contact">
                <Button style="header--button">Kontaktai</Button>
              </Link>
            </li>
          </ul>
        </Wrapper>
      </nav>
    </div>
  );
}

export default Header;
