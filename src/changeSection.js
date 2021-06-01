import home from './home';
import menu from './menu';
import contact from './contact';
import about from './about';

const changeSection = (section) => {
  const oldContent = document.querySelector('.principalContent');
  const content = document.querySelector('#content');

  const newContent = (() => {
    if (section === 'MENU') {
      return menu();
    }
    if (section === 'CONTACT') {
      return contact();
    }
    if (section === 'ABOUT') {
      return about();
    }

    return home();
  })();
  content.replaceChild(newContent, oldContent);
};

export { changeSection as default };