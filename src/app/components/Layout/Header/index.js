import "./index.css";
import spa from "../../../../images/SpaBannerPNG.png";
import { Button } from "../../componentsImport";

function Header() {
  return (
    <section className="header--container">
        <div className="header--wrapper">
           <a>
        <img src={spa} className="header--spa" />
      </a>
      <nav className="header--links-nav">
        <ul className="header--links-ul">
          <li className="header--links-li">
            <Button style="header--button" to="/login">
              Paslaugos ir kainos
            </Button>
          </li>
          <li className="header--links-li">
            <Button style="header--button" to="/login">
              Galerija
            </Button>
          </li>
          <li className="header--links-li">
            <Button style="header--button" to="/login">
              Kontaktai
            </Button>
          </li>
        </ul>
      </nav>  
        </div>
    </section>
  );
}
export default Header;
