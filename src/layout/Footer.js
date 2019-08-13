import React, { Component } from "react";

import footerStyles from "../modules/footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <div className={footerStyles.footerDiv}>
        <footer className={footerStyles.footer} />
      </div>
    );
  }
}

export default Footer;
