import "./styles/style.css";
import navigation from "./nav";
import home from "./home";
import contact from "./contact";

  const container = document.querySelector('#content');
  container.appendChild(navigation());
  container.appendChild(home());
  container.appendChild(contact());