import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Achievements = () => {
  return (
    <div id="achievements">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="name-css">
            <span className="surname">Achievements and ExtraCurriculars</span>
          </h1>
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          >
            <Paper
              elevation={24}
              style={{ backgroundColor: "#2c3e50", color: "white" }}
            >
              <div className="achievements">
                <ul className="fa-ul mb-0">
                  <li>
                    <i
                      className="fa-li fa fa-trophy"
                      style={{ color: "#F1F2B5" }}
                    />
                    Udemy's The Complete 2024 Web Devolopment Bootcamp by Dr. Angela Yu(included advanced full stack web 
                    development concepts like API integration) 
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy"
                      style={{ color: "#F1F2B5" }}
                    />
                    Certificate: Summer Internship Program- Full Stack Web Development
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                     5 star badge in Java and SQL hackerrank
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                    Hackerank SQL intermediate certificate
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                    IEEE Membership Certificate 
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                    Chess U-17 ZP Competition participation certificate
                  </li>
                </ul>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
