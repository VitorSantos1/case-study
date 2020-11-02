import { SERVICE_URL, PRODUCTS_ENDPOINT } from './NetworkConstants';

export const getProducts = async (appContext, jwtToken, pageNumber = 1, numberOfItems = 10) => {
    fetch(SERVICE_URL + PRODUCTS_ENDPOINT + "?page=" + pageNumber + "&page_size=" + numberOfItems, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Request-Headers':'content-type',
          'jwt': jwtToken
        }
      })
        .then((response) => (response.json()))
        .then((jsonResponse) => {
            appContext.setAppState("appState.products", jsonResponse);
        });
};