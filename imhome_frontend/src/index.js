import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./redux/configureStore";
import App from 'components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(

    // <Provider store={store}>
    //     <ConnectedRouter history={history}>
    //         <App /> 
    //     </ConnectedRouter>
    // </Provider>,
    <MuiThemeProvider store={store}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
