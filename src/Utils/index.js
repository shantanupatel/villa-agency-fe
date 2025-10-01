// function to handle formatting of listing price as currency
export const currencyFormat = (num, currency) => currency + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");