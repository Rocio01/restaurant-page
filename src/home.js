const home = () => {
  const principalSection = document.createElement("section");
  principalSection.className = "principalSection";

  const textDiv = document.createElement("div");
  textDiv.className = "textDiv";

  const heading = document.createElement("h1");
  heading.innerHTML = "ARTESANAL BURGERS AND DELICIOUS FOOD DONE RIGHT."

  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Join us for your next meal. We have a wide menu."

 
  textDiv.appendChild(heading);
  textDiv.appendChild(paragraph);
  principalSection.appendChild(textDiv);
  
  return principalSection;

};

export { home as default };
