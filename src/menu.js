import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/9.jpg';
import img6 from './images/5.jpg';

const menu = () => {
  const imgList = [img1, img2, img3, img4, img5, img6];
  const menuSection = document.createElement("section");
  menuSection.className = "menuSection";
  const menuDiv = document.createElement("div");
  menuDiv.className = "menuDiv";
  const menuTitle = document.createElement("h1");
  menuTitle.className = "menuTitle";
  menuTitle.innerHTML = "OUR MENU";
  
  menuSection.appendChild(menuTitle);

  imgList.forEach((imagen) => {
    const menuImgDiv = document.createElement("div");
    menuImgDiv.className = "menuImgDiv";
    const menuImg = document.createElement("img");
    menuImg.className = "menuImg";
    menuImg.setAttribute("src", imagen)

    menuImgDiv.appendChild(menuImg);

    menuDiv.appendChild(menuImgDiv);

  });

  menuSection.appendChild(menuDiv);
  
 return menuSection;
}

export {menu as default};