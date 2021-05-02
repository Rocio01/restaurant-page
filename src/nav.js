const navigation = () => {
  const navList = ["HOME", "MENU", "CONTACT", "ABOUT US"];
  const nav = document.createElement("nav");
  nav.className = "navbar";

  const restaurantTitle = document.createElement("h5");
  restaurantTitle.className = "brand-title";
  restaurantTitle.innerHTML = "COMELONES";
  nav.appendChild(restaurantTitle);

  const ul = document.createElement("ul");
  ul.className = "nav-ul";

  navList.forEach((navName)=> {
    const li = document.createElement("li");
    li.innerHTML = navName;
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  return nav;

}

export {navigation as default};