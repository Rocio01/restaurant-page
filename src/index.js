import "./styles/style.css";
import navigation from "./nav";
import home from "./home";
import contact from "./contact";
import menu from "./menu";

  const container = document.querySelector('#content');
  container.appendChild(navigation());
  container.appendChild(home());
  container.appendChild(contact());
  container.appendChild(menu());