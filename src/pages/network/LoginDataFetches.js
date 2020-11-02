import { SERVICE_URL, LOGIN_ENDPOINT } from './NetworkConstants';

export const postLogin = async (appContext, loginInfo, routeHistory) => {
    fetch(SERVICE_URL + LOGIN_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Headers': 'content-type',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    })
        .then(response => response.json())
        .then((jsonResponse) => {
            if (jsonResponse.message === "Success") {
                appContext.setAppState("appState.jwt", jsonResponse.data.jwt);
                routeHistory.push("/products");
            }
            
            //fetchInitialState(appContext);
        });
  }