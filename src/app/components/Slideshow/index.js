import "./index.css";
import { Wrapper } from "../componentsImport";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import{laukiamasis,baseinas,gym} from "../../../images/imagesImports"

const fadeImages = [
  laukiamasis,
  gym,
  baseinas


];

function Slideshow () {
  return (
    <Wrapper>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    </Wrapper>
  );
}
export default Slideshow;
