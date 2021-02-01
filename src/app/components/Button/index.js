import { Link } from "react-router-dom";
function Button({ style, type = "button", children, onClick, to }) {
  const Component = to ? Link : "button";
  return (
    <Component to={to} className={style} type={type} onClick={onClick}>
      {children}
    </Component>
  );
}
export default Button;
