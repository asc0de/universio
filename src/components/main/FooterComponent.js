'use strict';

import React from 'react';

require('styles/main/Footer.css');

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component">
        This is footer component
      </div>
    );
  }
}

FooterComponent.displayName = 'MainFooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
