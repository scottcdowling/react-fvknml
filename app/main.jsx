import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';

import AvatarComponent from './AvatarComponent.jsx';
import CardComponent from './CardComponent.jsx';
import MenuComponent from './MenuComponent.jsx';
import PanelBarComponent from './PanelBarComponent.jsx';
import SplitterComponent from './SplitterComponent.jsx';
import StepperComponent from './StepperComponent.jsx';
import TabStripComponent from './TabStripComponent.jsx';
import DrawerRouterContainer from './DrawerRouterContainer.jsx';

import './styles.css';

const App = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <DrawerRouterContainer>
                    <Switch>
                        <Route exact={true} path="/" component={AvatarComponent} />
                        <Route exact={true} path="/card" component={CardComponent} />
                        <Route exact={true} path="/menu" component={MenuComponent} />
                        <Route exact={true} path="/panelbar" component={PanelBarComponent} />
                        <Route exact={true} path="/splitter" component={SplitterComponent} />
                        <Route exact={true} path="/stepper" component={StepperComponent} />
                        <Route exact={true} path="/tabstrip" component={TabStripComponent} />
                    </Switch>
                </DrawerRouterContainer>
            </HashRouter>
        </React.Fragment>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);