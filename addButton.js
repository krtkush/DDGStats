const styling = '.bang-btn { color: white; background-color: #4583eb;right: -44px;}';

const SEARCH_BUTTON = document.getElementById('search_button');
const SEARCH_BAR = document.getElementById('search_form_input');

const GOOGLE_BANG = '!g';

const urlBuilder = (query) => {
  return 'https://duckduckgo.com/?q=' + GOOGLE_BANG + '%20' + query;
};

const bangSearch = (event) => {

  const url = urlBuilder(SEARCH_BAR.value);
  window.open(url, '_blank');
}

const createButton = () => {
  
  const button = document.createElement('input');

  button.id = 'google_bang_search_button';
  button.className = 'search__button bang-btn';
  button.type = 'button'
  button.value = "!"

  button.addEventListener("click", function (event) {
    (bangSearch).call(button, event);
  });
  
  return button;
};

const injectButton = () => {
  
  const css = document.createElement('style');
  const containerElement = SEARCH_BAR.parentElement;

  css.type = 'text/css';
  css.textContent = styling;

  document.body.append(css);

  containerElement.appendChild(createButton());
}

if (SEARCH_BAR !== null && SEARCH_BUTTON !== null) {
  injectButton();
}

