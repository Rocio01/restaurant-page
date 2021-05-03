import imagen from "./images/7.jpg";

const about = () => {
  const aboutSection = document.createElement("section");
  aboutSection.className = "aboutSection";
 
  const aboutTitle = document.createElement("h1");
  aboutTitle.className = "aboutTitle";
  aboutTitle.innerHTML = "ABOUT US";
  aboutSection.appendChild(aboutTitle);

  const aboutDiv = document.createElement("div");
  aboutDiv.className = "aboutDiv";

  const aboutText = document.createElement("h3");
  aboutText.className = "aboutText";
  aboutText.innerHTML = "Find more reasons to love eat outside. Great service, delicious food and nice people.";
 
  const imgAboutDiv = document.createElement("div");
  imgAboutDiv.className = "imgAboutDiv";
  const imgAbout = document.createElement("img");
  imgAbout.className = "imgAbout";
  imgAbout.setAttribute("src", imagen);

  imgAboutDiv.appendChild(imgAbout);

  aboutDiv.appendChild(aboutText);
  aboutDiv.appendChild(imgAboutDiv);
  aboutSection.appendChild(aboutDiv);

  return aboutSection;

}

export {about as default};