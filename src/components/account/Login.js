import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './login.cssmodule.scss';

class Login extends React.Component {

  render() {
    return (
      <div className="login-component" styleName="login-component">
        Please edit src\components\account\Login.js to update this component!
      </div>
    );
  }
}

Login.displayName = 'AccountLogin';
Login.propTypes = {};
Login.defaultProps = {};

export default cssmodules(Login, styles);
