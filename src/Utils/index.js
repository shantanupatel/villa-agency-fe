// function to handle formatting of listing price as currency
export const currencyFormat = (num, currency) => currency + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export const localStorageGetItem = (keyname) => {
  return JSON.parse(localStorage.getItem(keyname));
}

export const localStorageSaveItem = (keyname, data) => {
  localStorage.setItem(keyname, JSON.stringify(data));
}

export const localStorageRemoveItem = (keyname) => {
  localStorage.removeItem(keyname);
}
