import { Link } from "react-router-dom";

function MenuComponent({
  option1,
  option2,
  option3,
  icon,
  link1,
  link2,
  link3,
  handler,
}) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <p className={icon}></p>
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to={link1} className="dropdown-item" href="#">
            {option1}
          </Link>
        </li>
        <li>
          <Link to={link2} className="dropdown-item" href="#">
            {option2}
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to={link3} className="dropdown-item" href="#" onClick={handler}>
            {option3}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default MenuComponent;
