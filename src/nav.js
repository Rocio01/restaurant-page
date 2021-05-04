import changeSection from "./changeSection";

const navigation = () => {
  const navList = ["HOME", "MENU", "CONTACT", "ABOUT"];
  const nav = document.createElement("nav");
  nav.className = "navbar";

  const restaurantTitle = document.createElement("h2");
  restaurantTitle.className = "brand-title";
  restaurantTitle.innerHTML = "COMELONES";
  nav.appendChild(restaurantTitle);

  const ul = document.createElement("ul");
  ul.className = "nav-ul";

  navList.forEach((navName)=> {
    const li = document.createElement("li");
    li.innerHTML = navName;
    li.className = `${navName}`;
    li.addEventListener("click", () => {
      changeSection(navName);
    });
    ul.appendChild(li);
    nav.appendChild(ul); 
  });

  

  return nav;

};

export {navigation as default};