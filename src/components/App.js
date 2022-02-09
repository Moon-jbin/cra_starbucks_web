import React, { Component } from 'react';
import SkipComponent from './SkipComponent';
import WrapComponent from './WrapComponent';
import MobileNavComponent from './MobileNavComponent';
import QuickMenuComponent from './QuickMenuComponent';
import GoTopComponent from './GoTopComponent';
import ValidatorComponent from './ValidatorComponent';

class App extends Component {
    render() {
        return (
            <>
                <SkipComponent/>
                <WrapComponent/>
                <MobileNavComponent/>
                <QuickMenuComponent/>
                <GoTopComponent/>
                <ValidatorComponent/>
            </>
        );
    }
}

export default App;