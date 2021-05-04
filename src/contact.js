import imagen from './images/8.jpg';

const contact = () => {
  const contactSection = document.createElement("section");
  contactSection.className = "contactSection principalContent";

  const imgDiv = document.createElement("div");
  imgDiv.className = "imgDiv";
  const image = document.createElement("img");
  image.className = "contactImg";
  image.setAttribute("src", imagen);

  const contactText = document.createElement("h3");
  contactText.className = "contactText";
  contactText.innerHTML = "We are located in Miraflores, Boyaca (Colombia) near the central park, we will be happy to receive your orders.";

 imgDiv.appendChild(image);
 contactSection.appendChild(imgDiv);
 contactSection.appendChild(contactText);

 return contactSection;

}

export {contact as default};