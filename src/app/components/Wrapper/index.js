import "./index.css";

function Wrappper({children}) {
  return(
      <article className="container--wrapper">{children}</article>
      )
};
export default Wrappper;
