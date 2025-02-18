function MenuComponent({option1, option2, option3, icon}) {
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
          <a className="dropdown-item" href="#">
            {option1}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {option2}
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {option3}
          </a>
        </li>
      </ul>
    </li>
  );
}

export default MenuComponent;
