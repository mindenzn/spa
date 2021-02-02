import "./index.css";
import visa from "../../../../images/visa.png";
import mastercard from "../../../../images/mastercard.png";
import { Wrapepr, Wrapper } from "../../componentsImport";

function Footer() {
  return (
    <Wrapper>
      <section className="footer--container">
        <p className="footer--text">Copyright © 2021 by Mindaugas Žiurlys</p>
        <div className="footer--container-cards">
          <img className="footer--cards" src={visa} />
          <img className="footer--cards" src={mastercard} />
        </div>
      </section>
    </Wrapper>
  );
}
export default Footer;
