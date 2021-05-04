import "./styles/style.css";
import navigation from "./nav";
import home from "./home";

  const container = document.querySelector('#content');
  container.appendChild(navigation());
  container.appendChild(home());
