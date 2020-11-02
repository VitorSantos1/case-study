import React, { createContext, Component } from "react";
import u from 'updeep';

export const AppContext = createContext({
    appState: {},
    setAppState: () => {}
});

export class AppProvider extends Component {
    providerSetAppState = (propertyToSet, newPropertyValue) => {
        this.setState(u.updateIn(propertyToSet, newPropertyValue, this.state));
    };

    state = {
        appState: {
            jwt: "",
            products: { }
        },
        setAppState: this.providerSetAppState
    }

    render() {
        const { props, state } = this;

        return (
            <AppContext.Provider value={state}>
                {props.children}
            </AppContext.Provider>
        );
    };
}

export const AppConsumer = AppContext.Consumer;
