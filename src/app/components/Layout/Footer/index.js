import "./index.css";
import visa from "../../../../images/visa.png";
import mastercard from "../../../../images/mastercard.png";

function Footer() {
  return (
    <section className="footer--container">
      <p className="footer--text">
        Copyright © 2021 by Mindaugas Žiurlys
      </p>
      <div className="footer--container-cards">
        <img className="footer--cards" src={visa} />
        <img className="footer--cards" src={mastercard} />
      </div>
    </section>
  );
}
export default Footer;