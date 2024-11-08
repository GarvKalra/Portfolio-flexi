import React, { Component, Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            display="inline"
          >
            
          </Typography>
        </div>
        <div className="footer-a">
          
          <a href="https://www.linkedin.com/in/garv-kalra-291185262/" target="_blank">
            <i class="fab fa-linkedin" />
          </a>
          <a href="mailto: garvkalra044@gmail.com">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
