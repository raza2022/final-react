import React from 'react';
import YeomanImage from './YeomanImage';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <PurpleAppBar />
        <section style={{ padding: 20 }}>
          <SuccessButton label='Success' primary raised />
          <Button label='Primary Button' primary />
        </section>
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
